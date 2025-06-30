import { useRef } from "react";
import api from "../../Services/api";
import { useNavigate } from "react-router-dom";
import { Titulo, Container, Form, CaixaDeInput, Input, InputLabel } from "./style";
import Button from "../../Components/Button";
import ImagemCentral from "../../Components/ImagemCentral";

function Home() {

  const PegarNome = useRef()
  const PegarIdade = useRef()
  const PegarEmail = useRef()
  const UseNavigate = useNavigate()

  async function RegistrarNovoUsuario() {
    await api.post('/usuario', {
      name: PegarNome.current.value,
      age: parseInt(PegarIdade.current.value),
      email: PegarEmail.current.value
    })
  }




  return (

    <Container>

      <ImagemCentral />

      <Form>
        <Titulo> Cadastro de Clientes </Titulo>

        <CaixaDeInput>

          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={PegarNome} />
          </div>

          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={PegarIdade} />
          </div>

        </CaixaDeInput>

        <div style={{ width: '80%' }}>
          <InputLabel>
            E-mail <span>*</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={PegarEmail} />
        </div>

        <Button type="button" onClick={RegistrarNovoUsuario} theme="primeiro">Cadastrar Cliente</Button>
      </Form>

      <Button type="button" onClick={() => UseNavigate('/lista-de-clientes')} >Lista de Clientes</Button>
    </Container>

  )
}

export default Home
