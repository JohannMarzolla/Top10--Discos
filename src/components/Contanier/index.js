import style from './Contanier.module.css'
import Galeria from "../Galeria"
import MenuLateral from "../MenuLateral"


function Contanier({discos,setDiscoFiltrado}){
   
    return(
        <main className={style.contanier}>
            <Galeria discos={discos} setDiscoFiltrado={setDiscoFiltrado}/>
        </main>      
    )
}

export default Contanier