import React, { useState } from "react";
import { Board, OrdersContainer } from "../OrdersBoard/styles";
import type { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";

interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

    function handleOpenModal(order: Order) {
        console.log("order", order);
        setIsModalVisible(true);
        setSelectedOrder(order);
    }

    return (
        <Board>
            <OrderModal
                visible={isModalVisible}
                order={selectedOrder}
            ></OrderModal>
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>{orders.length}</span>
            </header>

            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map((order) => (
                        <button
                            type="button"
                            key={order._id}
                            onClick={() => handleOpenModal(order)}
                        >
                            <strong>Mesa {order.table}</strong>
                            <span>
                                {order.products.length}{" "}
                                {order.products.length > 1 ? "itens" : "item"}
                            </span>
                        </button>
                    ))}
                </OrdersContainer>
            )}
        </Board>
    );
}
