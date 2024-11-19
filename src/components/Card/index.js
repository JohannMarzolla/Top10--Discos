import { Link } from 'react-router-dom';
import style from './Card.module.css';
import imagemFavorito from './favoritar1.png';
import imagemDesfavorito from './desfavoritar.png';
import { useFavoritoContext } from '../../contextos/Favoritos';

function Card({ id, titulo, autor, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((item) => item.titulo === titulo);
    const icone = ehFavorito ? imagemFavorito : imagemDesfavorito;

   
    return (
        <div className={style.card}>
            <div className={style.coracaoWrapper}>
                <img 
                    className={style.coracao}
                    src={icone} 
                    alt='icone favorito'
                    onClick={()=> adicionarFavorito({ id, titulo, autor, capa })}
                />
            </div>
            <Link className={style.link} to={`/${id}`}>
                <img className={style.capa} src={capa} alt={titulo} />
                <div className={style['card-content']}>
                    <h3 className={style.h2}>{titulo}</h3>
                    <section className={style.section}>
                        <h5 className={style.h4}>{autor}</h5>
                    </section>
                </div>
            </Link>
        </div>
    );
}

export default Card;
