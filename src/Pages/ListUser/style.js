import styled from "styled-components";

export const Container = styled.div`
    background:linear-gradient(to right,rgb(31, 24, 41),rgb(26, 0, 68));
    min-height: 100vh;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;

`

export const CaixaDeUsuarios = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }

`

export const CatalogoDeUsuario = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 460px;

    h3 {
        color: #fff;
        text-transform: capitalize;
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 4px;
    }

    p {
        color: #fff;
        font-size: 16px;
        font-weight: 300;
    }
`

export const ImgDoUsuario = styled.img`
    height: 80px;
`

export const Trash = styled.img`
    height: 30px;
    cursor: pointer;
    padding-left: 30px;
    fill: #25b243;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

export const Button = styled.button`

`