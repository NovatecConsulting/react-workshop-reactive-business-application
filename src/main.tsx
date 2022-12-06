import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { MyPokemonTeam } from 'src/components/MyTeam/MyPokemonTeam';
import { PokemonCatcher } from 'src/components/PokemonCatcher/PokemonCatcher';
import { MyPokemonDetails } from 'src/components/MyTeam/MyPokemonDetails/MyPokemonDetails';
import { startInterceptor } from "src/mocks/intercept-fetch";

// if (!import.meta.vitest){
startInterceptor();
// }

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: 'pokemon-catcher',
        element: <PokemonCatcher />,
      },
      {
        path: 'my-team',
        element: <MyPokemonTeam />,
      },
      {
        path: 'my-team/:teamPokemonId',
        // element: <span>atas</span>,
        element: <MyPokemonDetails />,
      },
    ],
  },
]);

// start msw service worker
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
