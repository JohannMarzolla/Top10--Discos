import { Link } from 'react-router-dom'
import styles from './ItemNavegacaoCabecalho.module.css'

function ItemNavegacaoCabecalho({url , children , iconeCabecalho , alt}){
    return(

        <Link to={url} className={styles.link}>
            <img src={iconeCabecalho} alt={alt} />
            {children}
        </Link>

    )

}

export default ItemNavegacaoCabecalho