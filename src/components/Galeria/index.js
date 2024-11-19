import Banner from '../Banner'
import style from './Galeria.module.css'
import ContanierTitulo from '../ContanierTitulo'
import Titulo from '../Titulo'
import CampoTexto from '../CampoTexto'
import GaleriaImagens from './GaleriaImagens'
import MenuLateral from '../MenuLateral'
import BotaoCarrosel from './BotaoCarrosel'

function Galeria({discos,setDiscoFiltrado}){
    
    return(
        <div className={style.galeria}>
               <Banner />
               <MenuLateral/>
               <ContanierTitulo setDiscoFiltrado = {setDiscoFiltrado}/>
               <GaleriaImagens discos={discos}/>
             
    
        </div>
    
    
        
    )   

}

export default Galeria