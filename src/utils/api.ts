import axios from "axios";
import toast from "react-hot-toast";

const TOKEN_KEY = "@novosnack:token";

export const api = axios.create({
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
            const message =
                error.response.data?.error ?? "Something went wrong";

            if (status === 401) {
                localStorage.removeItem("@novosnack:token");
                window.location.href = "/";
                toast.error("Sessão expirada. Faça login novamente.");
            } else if (status === 404) {
                toast.error(message);
            } else if (status === 422) {
                toast.error(message);
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
