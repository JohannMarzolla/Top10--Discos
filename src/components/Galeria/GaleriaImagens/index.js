import { useRef } from 'react';
import Card from '../../Card';
import styles from './GaleriaImagens.module.css';
import BotaoCarrosel from '../BotaoCarrosel';

function GaleriaImagens({ discos }) {
    const carrosel = useRef(null);

    function handleLeftClick(e) {
        e.preventDefault();
        if (carrosel.current) {
            carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
        }
    }

    function handleRightClick(e) {
        e.preventDefault();
        if (carrosel.current) {
            carrosel.current.scrollLeft += carrosel.current.offsetWidth;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.carrosel} ref={carrosel}>
                {discos.map((disco) => (
                    <Card
                        key={disco.id}
                        autor={disco.autor}
                        capa={disco.capa}
                        titulo={disco.titulo}
                        id={disco.id}
                    />
                ))}
            </div>

            <div className={styles.divButton}>
                <BotaoCarrosel handleClick={handleLeftClick} diretion='left'/>
                <BotaoCarrosel handleClick={handleRightClick} />
            </div>
           
        </div>
    );
}

export default GaleriaImagens;
