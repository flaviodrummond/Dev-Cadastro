import { Titulo, Container, ImagemCentral, Form, CaixaDeInput, Input, InputLabel, Button } from "./style";

function Home() {


  return (

    <Container>
      <ImagemCentral>

        <img src="" alt="" />

      </ImagemCentral>

      <Form>
        <Titulo> Cadastro de Novos Usuários </Titulo>

        <CaixaDeInput>
          <div>

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

          </div>

          <div>
            <InputLabel>
              E-mail <span>*</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" />
          </div>

        </CaixaDeInput>
        <Button>Cadastrar Usuário</Button>
      </Form>

    </Container>

  )
}

export default Home
