import React from "react";
import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";

const orders: [] = [];

export function Orders() {
    return (
        <Container>
            <OrdersBoard
                icon="🕑"
                title="Fila de Espera"
                orders={orders}
            ></OrdersBoard>
            <OrdersBoard
                icon="👩‍🍳"
                title="Em Produção"
                orders={orders}
            ></OrdersBoard>
            <OrdersBoard
                icon="✅"
                title="Pronto!"
                orders={orders}
            ></OrdersBoard>
        </Container>
    );
}
