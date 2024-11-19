import imagem from './MaskGroup.png'
import style from './Banner.module.css'


function Banner(){
    return(
        <div className={style.container}>
            <img className={style.banner}  
        src={imagem}>
        </img>


        </div>
        
    )
}

export default Banner