import Olhos from "./Olhos";
import Boca from "./Boca";


const Corpo = ({olho, cor='#f0f0f0', boca}) => {
    return (
        <div className="corpo" style={{backgroundColor: cor}}>
            <Olhos olho={olho}/>
            <Boca boca={boca}/>

        </div>
    )
}

export default Corpo;