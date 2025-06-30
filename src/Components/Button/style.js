import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primeiro' ? 'none' : '2px solid #ffff'};
    background: ${props => props.theme === 'primeiro' ? 'linear-gradient(180deg,rgb(20, 20, 20) 0%,rgb(54, 49, 50) 100%)' : 'Transparent'} ;
    font-size: 18px;
    color: #ffffff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 25px;

    &:hover {
        ${props => props.theme === 'primeiro' ? 'opacity: 0.8' : 'border: 4px solid rgb(58, 16, 124)'};
    }

    &:active {
        ${props => props.theme === 'primeiro' ? 'opacity: 0.6' : 'background: linear-gradient(180deg,rgb(63, 63, 63) 0%,rgb(90, 85, 86) 100%)'};
    }

    &:focus {
    outline: none;
    box-shadow: none;
    }
`