import Cabecalho from "../../components/Cabecalho"
import Contanier from "../../components/Contanier"
import Rodape from "../../components/Rodape"
import { useDiscosContext } from "../../contextos/Discos"

function Metal(){
    const{  
        discosFiltrados,
        setDiscoFiltrado,
        setDiscosFiltrados}= useDiscosContext()
    return(
        <>
        <Cabecalho/>
        <Contanier discos={discosFiltrados}/>
        <Rodape/>
        </>
    )
    

}

export default Metal