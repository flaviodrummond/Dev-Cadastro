// Importa o hook useRef do React para acessar valores de inputs sem precisar usar useState
import { useRef } from "react";

// Importa a instância do Axios configurada para fazer requisições HTTP
import api from "../../Services/api";

// Importa o hook useNavigate para permitir navegação entre páginas (rotas)
import { useNavigate } from "react-router-dom";

// Importa os componentes estilizados (styled-components) para estruturar e estilizar a interface
import { Container, Form, CaixaDeInput, Input, InputLabel } from "./style";

// Importa o componente de botão personalizado
import Button from "../../Components/Button";

// Importa o componente que mostra uma imagem central (geralmente um ícone ou logotipo)
import ImagemCentral from "../../Components/ImagemCentral";

// Importa o componente que exibe o título principal da página
import TituloPrincipal from "../../Components/Título";

// Função principal que representa o componente da tela inicial
function Home() {

  // Cria referências para capturar os valores digitados nos inputs de nome, idade e e-mail
  const PegarNome = useRef();
  const PegarIdade = useRef();
  const PegarEmail = useRef();

  

  // Cria uma instância do hook useNavigate para permitir redirecionar o usuário para outra página
  const UseNavigate = useNavigate();

  // Função assíncrona que será executada ao clicar no botão "Cadastrar Cliente"
  // Envia os dados preenchidos para a API usando uma requisição POST
  async function RegistrarNovoUsuario() {
    await api.post('/usuario', {
      // Pega o valor digitado no campo de nome
      name: PegarNome.current.value,

      // Pega o valor digitado no campo de idade e converte para número inteiro
      age: parseInt(PegarIdade.current.value),

      // Pega o valor digitado no campo de e-mail
      email: PegarEmail.current.value
    })

    if (!PegarNome.current.value || !PegarIdade.current.value || !PegarEmail.current.value) {
  alert("Preencha todos os campos!");
  return;
}

  }

  // Estrutura visual do componente (JSX)
  return (

    // Container principal da página, define o layout geral com estilização
    <Container>

      {/* Componente que exibe uma imagem central (ex: logo) */}
      <ImagemCentral />

      {/* Início do formulário de cadastro */}
      <Form>

        {/* Título principal do formulário */}
        <TituloPrincipal/>

        {/* Agrupamento dos campos de nome e idade */}
        <CaixaDeInput>

          {/* Campo de entrada para o nome */}
          <div>
            <InputLabel>
              Nome <span>*</span> {/* Asterisco indica campo obrigatório */}
            </InputLabel>
            {/* Input de texto com placeholder e conectado ao useRef */}
            <Input type="text" placeholder="Nome do usuário" ref={PegarNome} />
          </div>

          {/* Campo de entrada para a idade */}
          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            {/* Input numérico com referência */}
            <Input type="number" placeholder="Idade do usuário" ref={PegarIdade} />
          </div>

        </CaixaDeInput>

        {/* Campo separado para o e-mail */}
        <div style={{ width: '80%' }}>
          <InputLabel>
            E-mail <span>*</span>
          </InputLabel>
          {/* Input de e-mail com referência */}
          <Input type="email" placeholder="E-mail do usuário" ref={PegarEmail} />
        </div>

        {/* Botão que ao ser clicado chama a função RegistrarNovoUsuario */}
        <Button type="button" onClick={RegistrarNovoUsuario} theme="primeiro">
          Cadastrar Cliente
        </Button>

      </Form>

      {/* Botão que leva o usuário para a página com a lista de clientes */}
      <Button type="button" onClick={() => UseNavigate('/lista-de-clientes')} >
        Lista de Clientes
      </Button>

    </Container>

  )
}

// Exporta o componente Home para ser usado nas rotas ou em outros arquivos
export default Home;
