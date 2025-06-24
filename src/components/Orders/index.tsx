import React from "react";
import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";

export function Orders() {
    return (
        <Container>
            <OrdersBoard icon="🕑" title="Fila de Espera"></OrdersBoard>
            <OrdersBoard icon="👩‍🍳" title="Em Produção"></OrdersBoard>
            <OrdersBoard icon="✅" title="Pronto!"></OrdersBoard>
        </Container>
    );
}
