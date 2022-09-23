import {useState} from 'react'
import './App.css'
import PokemonDashboard from "./components/PokemonDashboard/PokemonDashboard";

function App () {
  const [count, setCount] = useState(0)

  // test msw API: get pokemon
  fetch('/api/v1/my-pokemon/1', {
    method: 'GET'
  });

  // test msw API: update pokemon level
  fetch('/api/v1/my-pokemon/1/set-level', {
    method: 'POST',
    body: JSON.stringify({
      level: 10
    })
  })

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
