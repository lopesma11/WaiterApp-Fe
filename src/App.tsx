import { GlobalStyles } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/Header";
import { Orders } from "./components/Orders";
import { Toaster } from "react-hot-toast";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Login } from "./components/Login";
import React from "react";

function AppContext() {
    const { token } = useAuth();

    if (!token) {
        return <Login />;
    }

    return (
        <>
            <Header />
            <Orders />
        </>
    );
}

export function App() {
    return (
        <AuthProvider>
            <GlobalStyles />
            <Header />
            <Orders />
            <ToastContainer position="bottom-center" />
            <Toaster position="top-right" />
        </AuthProvider>
    );
}
