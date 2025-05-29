import './App.css'
import Pou from './views/Pou'
// Importando imagens olhos
import olho1 from '../src/images/olho1.png'
import olho2 from '../src/images/olho2.png'
import olho3 from '../src/images/olho3.png'
// Importando imagens bocas
import boca1 from '../src/images/boca1.png'
import boca2 from '../src/images/boca2.png'
import boca3 from '../src/images/boca3.png'


function App() {


  return (
    <div>
      <Pou nome={'FeliPou'} olho={olho3} cor={'#80daeb'} boca={boca1}/>
      <Pou nome={'Pouzinho'} olho={olho2} cor={'#f8b9d4'} boca={boca2}/>
      <Pou nome={'PouPou'} olho={olho1} cor={'#dbb9e7'} boca={boca3}/>
    </div>
   
  )
}

export default App
