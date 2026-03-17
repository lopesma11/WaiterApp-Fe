import { styled } from "styled-components";

export const Container = styled.header`
    background: #000;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-details {
        h1 {
            color: #fff;
            font-size: 32px;
        }
        h2 {
            color: #fff;
            font-weight: 400;
            font-size: 16px;
            opacity: 0.9;
            margin-top: 6px;
        }
    }
`;

export const LogoutButton = styled.button`
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #fff;
    padding: 0.5rem 1.25rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;
