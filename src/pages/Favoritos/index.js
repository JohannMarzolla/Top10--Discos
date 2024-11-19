import Cabecalho from "../../components/Cabecalho"
import Contanier from "../../components/Contanier"
import { useContext, useEffect, useState } from "react"
import Rodape from "../../components/Rodape"
import { useFavoritoContext } from "../../contextos/Favoritos"
import { useDiscosContext } from "../../contextos/Discos"

function Favoritos(){
    
    const {favorito} = useFavoritoContext();
    const {setDiscoFiltrado ,setDiscosFiltrados} =  useDiscosContext();
    const [discos, setDiscos] = useState(favorito);
   
    useEffect(()=>{
        setDiscosFiltrados(discos)
    },[favorito,setDiscoFiltrado])

    return(
            <>
             <Cabecalho/>
             <Contanier discos={discos} setDiscoFiltrado={setDiscoFiltrado} />
             <Rodape/>
    
            </>
        );
    }
export default Favoritos