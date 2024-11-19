import { Link, useLocation } from 'react-router-dom'
import styles from './ItemNavegacao.module.css'


function ItemNavegacao({url , children }){
    
    const localizacao = useLocation();
    const ehAtivo = localizacao.pathname === url;
    const link = ehAtivo ? styles.linkAtivo : styles.linkInativo


    return(
        <Link  to={url} className={link}>
            {children}
        </Link>

    )
}
export default ItemNavegacao