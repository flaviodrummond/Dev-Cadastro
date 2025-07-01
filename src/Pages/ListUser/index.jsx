import api from "../../Services/api"
import { useEffect } from "react"
import Button from "../../Components/Button"
import ImagemCentral from "../../Components/ImagemCentral"

function ListUser() {

    useEffect(() => {
        async function getUsuario() {
          const ApiUsuario = await api.get('./usuario')
            console.log(ApiUsuario)
        }
        getUsuario()
    }, [])
    

    return (
        <div>
            <ImagemCentral/>
            <h1>Lista de Clientes</h1>
            <Button>Voltar</Button>
        </div>
    )
}

export default ListUser