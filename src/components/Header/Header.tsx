import React from "react";
import logo from "../../assets/images/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <div className="page-details">
                    <h1>Pedidos</h1>
                    <h2>Acompanhando Pedidos dos Clientes</h2>
                </div>

                <img src={logo} alt="WaiterApp"></img>
            </Content>
        </Container>
    );
}
