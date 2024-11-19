
import style from './CampoTexto.module.css'


function CampoTexto({placeholder , setDiscoFiltrado}){
    
    
    return(
        
        <input 
        className={style.campoTexto} 
        placeholder={placeholder}
        type='text'
        onChange={(evento)=>{setDiscoFiltrado(evento.target.value)}}/>

        
    
    )

}

export default CampoTexto