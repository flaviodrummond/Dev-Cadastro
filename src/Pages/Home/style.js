import styled from "styled-components";


export const Container = styled.div`
    background:linear-gradient(to right,  #674998,rgb(58, 16, 124));
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const ImagemCentral = styled.div`
    border: 3px solid #fff;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.4);
    width: 90vw;
    max-width: 800px;
    height: 40vh;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 600px;
`

export const Titulo = styled.h2`
    color: #FFFFFF;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
`

export const CaixaDeInput = styled.div`
    display: flex;
    gap: 20px;
`

export const InputLabel = styled.label`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    padding-left: 20px;

    span {
        color: #ef4f45;
        font-weight: bold;
    }
`

export const Input = styled.input`
    font-size: 18px;
    font-weight: 400;
    border-radius: 10px;
    border: 1px solid #ffffff;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 12px 20px;
    outline: none;
    color: #fff;
    width: 100%;
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

    &::placeholder {
        color:rgb(189, 189, 189);
    }
`