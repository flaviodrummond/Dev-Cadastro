import Usuarios from '../../assets/users.png'
import { ImagemPrincipal } from './style'

function ImagemCentral() {

    return (

        <ImagemPrincipal>

            <img src={Usuarios} alt="Imagem de usuarios" />

        </ImagemPrincipal>
    )
}

export default ImagemCentral