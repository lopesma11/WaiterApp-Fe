import React from "react";
import { Board, OrdersContainer } from "../OrdersBoard/styles";
import type { Order } from "../../types/Order";

interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
    return (
        <Board>
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>(1)</span>
            </header>

            <OrdersContainer>
                <button type="button">
                    <strong>Mesa 2</strong>
                    <span>2 itens</span>
                </button>
            </OrdersContainer>
        </Board>
    );
}
