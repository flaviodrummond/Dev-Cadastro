import {useRef} from "react";
import api from "../../Services/api";
import { Titulo, Container, ImagemCentral, Form, CaixaDeInput, Input, InputLabel, Button } from "./style";

import Usuarios from '../../assets/users.png'

function Home() {

  const PegarNome = useRef()
  const PegarCpf = useRef()
  const PegarEmail = useRef()

  async function RegistrarNovoUsuario() {
    const data =  await api.post('/usuarios', {
      name: PegarNome.current.value,
      cpf: PegarCpf.current.value,
      email: PegarEmail.current.value
    })

    console.log(data)
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
                CPF <span>*</span>
              </InputLabel>
              <Input type="number" placeholder="CPF do usuário" ref={PegarCpf} />
            </div>

        </CaixaDeInput>

        <div style={{width: '80%'}}>
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
