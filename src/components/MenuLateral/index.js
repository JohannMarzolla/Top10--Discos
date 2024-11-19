import ItemNavegacao from './ItemNavegacao'
import styles from './MenuLateral.module.css'

function MenuLateral(){


    return(
        <ul className={styles.menuLateral}>
          
            <ItemNavegacao url="./Rock" >
                Rock
            </ItemNavegacao>
            <ItemNavegacao url="./Pop">
                Pop
            </ItemNavegacao>
            <ItemNavegacao url="./Balada">
                Balada
            </ItemNavegacao>
            <ItemNavegacao url="./Metal">
                Metal
            </ItemNavegacao>
         
        </ul>
        
    )   

}

export default MenuLateral