import axios from "axios";
import toast from "react-hot-toast";

const TOKEN_KEY = "@novosnack:token";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3001",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const status = error.response.status;
            const message = error.response.data?.error ?? "Algo deu errado";

            if (status === 401) {
                localStorage.removeItem(TOKEN_KEY);
                window.location.href = "/";
                toast.error("Sessão expirada. Faça login novamente.");
            } else if (status === 404) {
                toast.error("Recurso não encontrado");
            } else if (status === 400) {
                toast.error(`Dados inválidos: ${message}`);
            } else if (status >= 500) {
                toast.error("Erro no servidor. Tente novamente.");
            }
        } else if (error.request) {
            toast.error("Sem conexão com o servidor");
        }

        return Promise.reject(error);
    },
);

export default api;
