import {useState} from 'react'
import './App.css'
import PokemonDashboard from "./components/PokemonDashboard/PokemonDashboard";

function App () {
  const [count, setCount] = useState(0)

  // test msw API: get pokemon
  fetch('/api/v1/my-pokemon/1', {
    method: 'GET'
  });

  // test msw API: increase pokemon level
  fetch('/api/v1/my-pokemon/1/level-up', {
    method: 'POST'
  });

  let nickname = 'MOCK';

  setTimeout(() => {
    fetch('/api/v1/my-pokemon/1/set-nickname', {
      method: 'POST',
      body: JSON.stringify({
        nickname: 'Bisabro'
      })
    }).then(async (res) => {
      const data = await res.json();
      nickname = data.nickname;
    });
  }, 1000);

  return (
    <div className="App" >
      {nickname}
      <PokemonDashboard></PokemonDashboard>

        {/*<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png`}/>*/}
        {/*<PokemonChooser count={count}/>*/}
        {/*<CatchButton onClick={() => setCount((count) => count + 1)}/>*/}
    </div>
  )
}

export default App
