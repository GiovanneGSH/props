import Corpo from "../components/corpo"

import olho1 from '../images/olho1.png'
import olho2 from '../images/olho2.png'
import olho3 from '../images/olho3.png'

import boca1 from '../images/boca1.png'
import boca2 from '../images/boca2.png'
import boca3 from '../images/boca3.png'

const Pou = ({nome, olho, cor, boca}) => {
    return(
        <div>
            <h2>Apelido: {nome} </h2>
            <Corpo olho={olho} cor={cor} boca={boca}/>
        </div>
    )
}
export default Pou;