import { Titulo, Container, ImagemCentral, Form, CaixaDeInput, Input, InputLabel, Button } from "./style";

import Usuarios from './assets/users.png'

function Home() {


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
              <Input type="text" placeholder="Nome do usuário" />
            </div>

            <div>
              <InputLabel>
                CPF <span>*</span>
              </InputLabel>
              <Input type="number" placeholder="CPF do usuário" />
            </div>

        </CaixaDeInput>

        <div style={{width: '80%'}}>
          <InputLabel>
            E-mail <span>*</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" />
        </div>

        <Button>Cadastrar Cliente</Button>
      </Form>

    </Container>

  )
}

export default Home
