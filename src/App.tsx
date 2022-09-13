import {useState} from 'react'
import './App.css'
import PokemonDashboard from "./components/PokemonDashboard/PokemonDashboard";

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <PokemonDashboard></PokemonDashboard>

        {/*<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png`}/>*/}
        {/*<PokemonChooser count={count}/>*/}
        {/*<CatchButton onClick={() => setCount((count) => count + 1)}/>*/}
    </div>
  )
}

export default App
