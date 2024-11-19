import { Link } from 'react-router-dom'
import style from './BannerCabecalho.module.css'

function BannerCabecalho({url , imagemCabecalho}){
    return(
        
        <Link to={url} >
            <nav className={style.nav}>
            <img className={style.imagem} src={imagemCabecalho} alt='Imagem cabeçalho'/>
            <p className={style.titulo}>
                <strong>Marzolla </strong> 
                Music Records</p>
            </nav>

           
             
        </Link>
    )

}

export default BannerCabecalho