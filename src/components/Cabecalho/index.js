import BannerCabecalho from './BannerCabecalho'
import style from './Cabecalho.module.css'
import ItemNavegacaoCabecalho from './ItemNavegacaoCabecalho'
import imagemCabecalho from './bannerCabecalho.png'
import iconeCabecalhoFavorito from './favoritoCabecalho.png' 

function Cabecalho({}){
    return(
        
        <header className={style.cabecalho}>
            <BannerCabecalho url="/" imagemCabecalho={imagemCabecalho}/>
            <ItemNavegacaoCabecalho 
                url="/Favoritos" 
                iconeCabecalho={iconeCabecalhoFavorito} 
                alt='icone de favoritos '>
            </ItemNavegacaoCabecalho>
             
        </header>
    )

}

export default Cabecalho