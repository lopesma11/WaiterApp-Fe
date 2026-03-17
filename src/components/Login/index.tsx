import { useState, type FormEvent } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-hot-toast";
import api from "../../utils/api";
import React from "react";

export function Login() {
    const { signIn } = useAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!email || !password) {
            toast.error("Preencha email e senha");
            return;
        }

        try {
            setIsLoading(true);

            const { data } = await api.post("/auth/login", { email, password });

            signIn(data.token);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1a1a2e",
                gap: "2rem",
            }}
        >
            <img src="/logo.svg" alt="WaiterApp" style={{ width: 200 }} />

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    width: "100%",
                    maxWidth: 360,
                    padding: "2rem",
                    backgroundColor: "#fff",
                    borderRadius: "1rem",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                    Entrar no painel
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    style={{
                        padding: "0.875rem",
                        backgroundColor: "#D73035",
                        color: "#fff",
                        border: "none",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                        fontWeight: 600,
                        cursor: isLoading ? "not-allowed" : "pointer",
                        opacity: isLoading ? 0.7 : 1,
                    }}
                >
                    {isLoading ? "Entrando..." : "Entrar"}
                </button>
            </form>
        </div>
    );
}

const inputStyle: React.CSSProperties = {
    padding: "0.875rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    outline: "none",
};
