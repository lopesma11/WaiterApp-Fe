import React from "react";
import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import type { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";

interface OrderModalProps {
    visible: boolean;
    order: Order | null;
    onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
    if (!visible || !order) {
        return null;
    }

    const total = order.products.reduce((total, { product, quantity }) => {
        return total + product.price * quantity;
    }, 0);

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>

                    <button type="button" onClick={onClose}>
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
                        <strong>
                            {order.status === "WAITING" && "Fila de Espera"}
                            {order.status === "IN_PRODUCTION" &&
                                "Em Preparação"}
                            {order.status === "DONE" && "Pronto!"}
                        </strong>
                    </div>
                </div>

                <OrderDetails>
                    <strong>Itens</strong>
                    <div className="order-itens">
                        {order.products.map(({ _id, product, quantity }) => (
                            <div className="item" key={_id}>
                                <img
                                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                                    alt={`${product.name}`}
                                    width="56"
                                    height="28.51"
                                />

                                <span className="quantity">{quantity}x</span>

                                <div className="product-details">
                                    <strong>{product.name}</strong>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="total">
                        <span>Total</span>
                        <strong>{total}</strong>
                    </div>

                    <Actions>
                        <button type="button" className="primary">
                            <span>👩‍🍳</span>
                            <span>Iniciar Produção</span>
                        </button>
                        <button className="secundary">Cancelar Pedido</button>
                        🕑👩‍🍳✅
                    </Actions>
                </OrderDetails>
            </ModalBody>
        </Overlay>
    );
}
