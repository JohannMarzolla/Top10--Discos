import styles from './ContanierTitulo.module.css'
import Titulo from '../Titulo'
import CampoTexto from '../CampoTexto'

function ContanierTitulo({setDiscoFiltrado}){
    return(
        <div className={styles.contanier}>
            <Titulo><strong>Top 10 </strong>Discos mais vendidos </Titulo>
            <CampoTexto placeholder={"Procure por disco ou artista ?"} setDiscoFiltrado = {setDiscoFiltrado}/>
         
        </div>
    )
}

export default ContanierTitulo