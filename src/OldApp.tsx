import { useState } from 'react';
import './App.css';
import MyPokemonDashboard from 'src/components/MyTeam/MyPokemonTeam';
import { NavBar } from 'src/App';

// function App () {
//   // TODO Do we need this?
//   // test msw API: get pokemon
//   // fetch('/api/v1/my-pokemon/1', {
//   //   method: 'GET'
//   // });
//   //
//   // // test msw API: increase pokemon level
//   // fetch('/api/v1/my-pokemon/1/level-up', {
//   //   method: 'POST'
//   // });
//
//
//   // setTimeout(() => {
//   //   fetch('/api/v1/my-pokemon/1/set-nickname', {
//   //     method: 'POST',
//   //     body: JSON.stringify({
//   //       nickname: 'Bisabro'
//   //     })
//   //   }).then(async (res) => {
//   //     const data = await res.json();
//   //     console.log(data)
//   //   });
//   // }, 1000);
//
//   return (
//     <div className="App" >
//       <MyPokemonDashboard/>
//
//         {/*<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png`}/>*/}
//         {/*<PokemonCatcher count={count}/>*/}
//         {/*<CatchButton onClick={() => setCount((count) => count + 1)}/>*/}
//     </div>
//   )
// }

// export default App
