import logo from "../../assets/images/logo.svg";
import { useAuth } from "../../contexts/AuthContext";
import { Container, Content, LogoutButton } from "./styles";
import React from "react";

export function Header() {
    const { signOut } = useAuth();

    return (
        <Container>
            <Content>
                <div className="page-details">
                    <h1>Pedidos</h1>
                    <h2>Acompanhando Pedidos dos Clientes</h2>
                </div>

                <img src={logo} alt="NovoSnackApp" />

                <LogoutButton onClick={signOut}>Sair</LogoutButton>
            </Content>
        </Container>
    );
}
