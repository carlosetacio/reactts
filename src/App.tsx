import { useState } from "react";

function App() {
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [lista, setLista] = useState(toolKit);
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const handleClick = () => {
    if (index + 1 < lista.length) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }
  const handleClick2 = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1)
    } else {
      setIndex(lista.length - 1)
    }
  }

  const handleClick3 = () => {
    if (inputValue) {
      setLista([...lista, inputValue])
      setInputValue('')
    }
  }

  return (
    <div>
      <h2>{lista[index]}</h2>
      <button onClick={handleClick}>próximo</button>
      <button onClick={handleClick2}>anterior</button>
      <ul>
        {lista.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      <input value={inputValue} onChange={({target}) => setInputValue(target.value)}/>
      <button onClick={handleClick3}>adicionar</button>
    </div>
  )
}

export default App