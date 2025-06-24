import React from "react";
import { ModalBody, OrderDetails, Overlay } from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import type { Order } from "../../types/Order";

interface OrderModalProps {
    visible: boolean;
    order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
    if (!visible || !order) {
        return null;
    }

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>

                    <button type="button">
                        <img src={closeIcon} alt="Ícone de fechar" />
                    </button>
                </header>

                <div className="status-container">
                    <small>Status do Pedido</small>
                    <div>
                        <span>
                            {order.status === "WAITING" && "🕑"}
                            {order.status === "IN_PRODUCTION" && "👩‍🍳"}
                            {order.status === "DONE" && "✅"}
                        </span>
                        <strong>Fila de Espera</strong>
                    </div>
                </div>

                <OrderDetails>
                    <strong>Itens</strong>
                </OrderDetails>
            </ModalBody>
        </Overlay>
    );
}
