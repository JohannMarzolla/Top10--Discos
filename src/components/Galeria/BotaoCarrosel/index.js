import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";


function BotaoCarrosel({ handleClick, diretion ,children }) {

    const  Icon = diretion === 'left' ? FaCaretLeft : FaCaretRight
 
    return (
        <Icon onClick={handleClick} style={{height:40, width:40 , cursor:'pointer'}} >
            {children}
        </Icon>
    );
}

export default BotaoCarrosel;