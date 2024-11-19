import { createContext, useContext, useEffect, useState } from "react";
import Discos from '../db.json';
import { useLocation, useParams } from "react-router-dom";

export const DiscosContext = createContext();
DiscosContext.displayName="discos"

export default function DiscosContextProvider({children}) {

    const location = useLocation();
    const caminho = location.pathname;
    const genero = caminho === '/' ? 'historia' :  caminho.replace("/", "").toLowerCase();
    const [discosOriginais, setDiscosOriginais] = useState([]);
    const [discosDb, setDiscoDb] =  useState(Discos);

    useEffect(() => {
        if (Discos[genero]) {
            setDiscosOriginais(Discos[genero]); 
        } else {
            setDiscosOriginais([]); 
        }
    }, [genero]);


    return(
    <DiscosContext.Provider
        value={{discosOriginais, setDiscosOriginais , discosDb}}>
            {children}
    </DiscosContext.Provider>
    )
}


export function useDiscosContext(){
    const{discosDb} = useContext(DiscosContext);
    const {discosOriginais, setDiscosOriginais } = useContext(DiscosContext);
    const [discosFiltrados, setDiscosFiltrados] = useState(discosOriginais);
    const [discoFiltrado, setDiscoFiltrado] = useState('');

    useEffect(() => {
        const discosFiltrados = discosOriginais.filter((disco) => {
            const filtroPorDisco = !discoFiltrado || disco.titulo.toLowerCase().includes(discoFiltrado.toLowerCase());
            const filtroPorArtista = !discoFiltrado || disco.autor.toLowerCase().includes(discoFiltrado.toLowerCase());
            return filtroPorDisco || filtroPorArtista;
        });

        setDiscosFiltrados(discosFiltrados);
    }, [discoFiltrado, discosOriginais]);


    return{

        discosDb,
        discosFiltrados,
        setDiscoFiltrado,
        setDiscosFiltrados
    }

}
