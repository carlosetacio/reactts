import { useState } from 'react'


function App() {
  const [valor, setValor] = useState('');
  return (
    <div>
      <input type="text" placeholder='digite aqui' onChange={({target}) => setValor(target.value)} />
      <span>{valor}</span>
    </div>
  )

}

export default App