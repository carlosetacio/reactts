import Botao from "./components/botao"
import {useState} from "react";
function App() {
  const [showImg, setShowImg] = useState(true)
  const [resultado, setResultado] = useState(1)
  const numMax = () => {
    if (resultado <= 9) {
      setResultado(resultado + 1)
    }
  }
  const numMin = () => {
    if (resultado >= 2) {
      setResultado(resultado - 1)
    }
  }
  const handleClick = () => {
    alert('Clique 01')

  }
  
  return (
    <div>
      <button onClick={handleClick}>Clique 01</button>
      <button onClick={() => alert('Clique 02')}>Clique 02</button>
      <Botao click={() => alert('Clique 3')}>
        <h1>Clique 03</h1>
      </Botao>
      
      <Botao click={() => setShowImg(!showImg)}><h1>Clique 04</h1></Botao><br/>
      {showImg && <img src="https://tse2.mm.bing.net/th?id=OIP.y9t1PmLOLEN6ot3-xCPVJAHaHa&pid=Api&P=0&h=180"/>}<br/>
      <Botao click={numMin}><h1>-</h1></Botao><br/>
      <span>{resultado}</span><br/>
      <Botao click={numMax}><h1>+</h1></Botao>
    </div>
  )

}

export default App