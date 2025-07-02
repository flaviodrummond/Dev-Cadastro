import api from "../../Services/api"
import { useEffect, useState } from "react"
import Button from "../../Components/Button"
import ImagemCentral from "../../Components/ImagemCentral"
import TituloPrincipal from "../../Components/Título"
import TrashIcon from "../../assets/trash-icon.png"
import { Container, CaixaDeUsuarios, ImgDoUsuario, Trash, CatalogoDeUsuario } from "./style"
function ListUser() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        async function getUsuario() {
            const { data } = await api.get('./usuario')
            setUsuarios(data)
        }
        getUsuario()
    }, [])


    return (
        <Container>

            <ImagemCentral />

            <TituloPrincipal />

            <CaixaDeUsuarios>
                {usuarios.map(usuario => (
                    <CatalogoDeUsuario key={usuario.id}>
                        <ImgDoUsuario src={`https://avatar.iran.liara.run/public?username= ${usuario.id}`}/>
                    <div>
                        <p>{usuario.name}</p>
                        <p>{usuario.age}</p>
                        <p>{usuario.email}</p>
                    </div>
                    <Trash src= {TrashIcon} alt="Icon Lixeira"/>
                    </CatalogoDeUsuario>
                ))}

            </CaixaDeUsuarios>

            <Button type="button" >Voltar</Button>

        </Container>
    )
}

export default ListUser