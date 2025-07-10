import React, { useEffect } from "react";
import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";
import { useState } from "react";
import type { Order } from "../../types/Order";
import { api } from "../../utils/api";

export function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        api.get(`/orders`).then(({ data }) => {
            setOrders(data);
        });
    }, []);

    const waitingStatus = orders.filter((order) => order.status === "WAITING");
    const inProductionStatus = orders.filter(
        (order) => order.status === "IN_PRODUCTION"
    );
    const doneStatus = orders.filter((order) => order.status === "DONE");

    function handleCancelOrder(orderId: string) {
        setOrders((prevState) =>
            prevState.filter((order) => order._id !== orderId)
        );
    }

    function handleOrderStatusChange(orderId: string, status: Order["status"]) {
        setOrders((prevState) =>
            prevState.map((order) =>
                order._id === orderId ? { ...order, status } : order
            )
        );
    }

    return (
        <Container>
            <OrdersBoard
                icon="🕑"
                title="Fila de Espera"
                orders={waitingStatus}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}
            ></OrdersBoard>
            <OrdersBoard
                icon="👩‍🍳"
                title="Em Produção"
                orders={inProductionStatus}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}
            ></OrdersBoard>
            <OrdersBoard
                icon="✅"
                title="Pronto!"
                orders={doneStatus}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}
            ></OrdersBoard>
        </Container>
    );
}
