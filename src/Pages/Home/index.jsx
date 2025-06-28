import { useRef } from "react";
import api from "../../Services/api";
import { Titulo, Container, ImagemCentral, Form, CaixaDeInput, Input, InputLabel, Button } from "./style";

import Usuarios from '../../assets/users.png'

function Home() {

  const PegarNome = useRef()
  const PegarIdade = useRef()
  const PegarEmail = useRef()

  async function RegistrarNovoUsuario() {
    await api.post('/usuario', {
      name: PegarNome.current.value,
      age: parseInt(PegarIdade.current.value),
      email: PegarEmail.current.value
    })
  }




  return (

    <Container>
      <ImagemCentral>

        <img src={Usuarios} alt="Imagem de usuarios" />

      </ImagemCentral>

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

        <Button type="button" onClick={RegistrarNovoUsuario}>Cadastrar Cliente</Button>
      </Form>

    </Container>

  )
}

export default Home
