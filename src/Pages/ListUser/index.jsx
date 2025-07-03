import api from "../../Services/api"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Button from "../../Components/Button"
import ImagemCentral from "../../Components/ImagemCentral"
import TituloPrincipal from "../../Components/Título"
import TrashIcon from "../../assets/trash.png"
import { Container, CaixaDeUsuarios, ImgDoUsuario, Trash, CatalogoDeUsuario } from "./style"


function ListUser() {

    const [usuarios, setUsuarios] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getUsuario() {
            const { data } = await api.get('./usuario')
            setUsuarios(data)
        }
        getUsuario()
    }, [])

    async function deletarUsuario(id) {
        await api.delete(`./usuario/${id}`)

        const atualizacaoDeUsuario = usuarios.filter(usuario => usuario.id !== id)
        setUsuarios(atualizacaoDeUsuario)
            
        }


    return (
        <Container>

            <ImagemCentral />

            <TituloPrincipal />

            <CaixaDeUsuarios>
                {usuarios.map(usuario => (
                    <CatalogoDeUsuario key={usuario.id}>
                        <ImgDoUsuario src={`https://avatar.iran.liara.run/public?username=${usuario.id}`} />
                        <div>
                            <h3>{usuario.name}</h3>
                            <p>{usuario.age}</p>
                            <p>{usuario.email}</p>
                        </div>
                        <Trash src={TrashIcon} alt="Icon Lixeira" onClick={() => deletarUsuario(usuario.id)} />
                    </CatalogoDeUsuario>
                ))}

            </CaixaDeUsuarios>

            <Button type="button" onClick={() => navigate('/')} >Voltar</Button>

        </Container>
    )
}

export default ListUser