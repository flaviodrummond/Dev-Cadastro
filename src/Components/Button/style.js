import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background: linear-gradient(180deg,rgb(20, 20, 20) 0%,rgb(54, 49, 50) 100%);
    font-size: 18px;
    color: #ffffff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 25px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    &:focus {
    outline: none;
    box-shadow: none;
    }
`