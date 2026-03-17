import React, { createContext, useCallback, useState, useContext } from "react";

interface AuthContextValue {
    token: string | null;
    signIn: (token: string) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const TOKEN_KEY = "@novosnack:token";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem(TOKEN_KEY);
    });

    const signIn = useCallback((newToken: string) => {
        localStorage.setItem(TOKEN_KEY, newToken);
        setToken(newToken);
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
    }, []);

    return (
        <AuthContext.Provider value={{ token, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth deve ser usado dentro de AuthProvider");
    }

    return context;
}
