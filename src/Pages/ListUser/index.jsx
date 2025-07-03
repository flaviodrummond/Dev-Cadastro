// Importa a instância da API (Axios configurado) para fazer requisições HTTP
import api from "../../Services/api";

// Importa o hook useNavigate, que permite mudar de rota programaticamente
import { useNavigate } from "react-router-dom";

// Importa os hooks do React:
// - useEffect: executa um efeito colateral ao montar o componente
// - useState: armazena e atualiza o estado dos usuários
import { useEffect, useState } from "react";

// Importa o componente de botão personalizado
import Button from "../../Components/Button";

// Importa o componente da imagem central da tela
import ImagemCentral from "../../Components/ImagemCentral";

// Importa o componente do título principal da tela
import TituloPrincipal from "../../Components/Título";

// Importa o ícone da lixeira (formato de imagem .png)
import TrashIcon from "../../assets/trash.png";

// Importa os componentes estilizados da tela (criados com styled-components)
import {
  Container,            // Container principal da página
  CaixaDeUsuarios,      // Grid onde os cards dos usuários são organizados
  ImgDoUsuario,         // Imagem de avatar do usuário
  Trash,                // Imagem da lixeira estilizada
  CatalogoDeUsuario     // Card com os dados do usuário
} from "./style";

// Função principal do componente que representa a tela de listagem dos usuários
function ListUser() {

  // Estado que armazena a lista de usuários vindos da API
  const [usuarios, setUsuarios] = useState([]);

  // Função de navegação entre páginas (ex: voltar para a home)
  const navigate = useNavigate();

  // useEffect que será executado assim que o componente for carregado
  // Responsável por buscar os usuários da API
  useEffect(() => {
    // Função assíncrona para buscar os dados dos usuários
    async function getUsuario() {
      // Faz uma requisição GET na rota /usuario e pega os dados da resposta
      const { data } = await api.get('./usuario');

      // Atualiza o estado com os dados recebidos
      setUsuarios(data);
    }

    // Chama a função
    getUsuario();
  }, []); // Array vazio garante que será executado apenas uma vez ao carregar a página

  // Função para deletar um usuário específico da API e da tela
  async function deletarUsuario(id) {
    // Faz uma requisição DELETE para remover o usuário do banco de dados
    await api.delete(`./usuario/${id}`);

    // Cria uma nova lista excluindo o usuário deletado
    const atualizacaoDeUsuario = usuarios.filter(usuario => usuario.id !== id);

    // Atualiza o estado com a nova lista (sem o usuário deletado)
    setUsuarios(atualizacaoDeUsuario);
  }

  // JSX (estrutura visual) retornada pelo componente
  return (
    // Container principal da tela
    <Container>

      {/* Componente que exibe a imagem central (ex: logotipo ou ícone) */}
      <ImagemCentral />

      {/* Componente que exibe o título da página */}
      <TituloPrincipal />

      {/* Container onde os usuários serão exibidos em grid */}
      <CaixaDeUsuarios>

        {/* Mapeia a lista de usuários e renderiza um card para cada um */}
        {usuarios.map(usuario => (
          // Card individual do usuário
          <CatalogoDeUsuario key={usuario.id}>

            {/* Avatar do usuário gerado com base no ID */}
            <ImgDoUsuario src={`https://avatar.iran.liara.run/public?username=${usuario.id}`} />

            {/* Informações do usuário: nome, idade e e-mail */}
            <div>
              <h3>{usuario.name}</h3>
              <p>{usuario.age}</p>
              <p>{usuario.email}</p>
            </div>

            {/* Ícone da lixeira que, ao ser clicado, deleta o usuário */}
            <Trash
              src={TrashIcon}              // Caminho da imagem da lixeira
              alt="Icon Lixeira"           // Texto alternativo da imagem
              onClick={() => deletarUsuario(usuario.id)} // Função de deletar com ID do usuário
            />
          </CatalogoDeUsuario>
        ))}
      </CaixaDeUsuarios>

      {/* Botão que redireciona o usuário para a tela inicial */}
      <Button type="button" onClick={() => navigate('/')}>
        Voltar
      </Button>

    </Container>
  );
}

// Exporta o componente para ser utilizado nas rotas ou em outras partes do projeto
export default ListUser;
