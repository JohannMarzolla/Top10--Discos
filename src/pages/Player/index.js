import { useParams } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import { useEffect, useState } from "react";
import { useDiscosContext } from '../../contextos/Discos';
import style from './Plyaer.module.css';
import discoJson from '../../db.json'

function Player() {
    const discosDb  = discoJson;
    const [disco, setDisco] = useState(null);
    const parametros = useParams();
    const id = parseInt(parametros.id, 10); // Converte o ID para número

    useEffect(() => {
        // Itera sobre as seções de discos no discosDb
        let discoSelecionado = null;

        for (const genre in discosDb) {
            if (discosDb.hasOwnProperty(genre)) {
                discoSelecionado = discosDb[genre].find(disco => disco.id === id);
                if (discoSelecionado) break;
            }
        }
        setDisco(discoSelecionado || null);
    }, [id, discosDb]);


    if (!disco) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Cabecalho />
            <div className={style.titulo}>
                {disco.titulo}
            </div>

            <div className={style.container}>
                <section className={style.section}>
                    <iframe 
                        className={style.video}
                        width="100%" 
                        height="100%" 
                        src={disco.link} 
                        title={disco.titulo} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                    </iframe>
                    <p className={style.paragrafo}>{disco.descricao}</p>
                </section>
            </div>
        </>
    );
}

export default Player;
