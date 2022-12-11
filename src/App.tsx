import { AppBar, Box, Button, Container, Paper, Toolbar } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { PokemonTeamContextValue, PokemonTeamProvider } from 'src/context/PokemonTeamContext';
import { useEffect, useState } from 'react';
import { TeamPokemon } from 'src/types/BasicPokemon';
import { getPokemonTeamQuery, savePokemonTeamQuery } from 'src/api';

export function App() {
  const pages = [
    { label: 'Pokemon Catcher', route: '/pokemon-catcher' },
    { label: 'My Team', route: '/my-team' },
  ];

  // TODO: Aufgabe 4.2: Kontext definieren mit den `pokemonTeam`, `addPokemonToTeam` und `updatePokemon`

  const [team, setTeam] = useState([] as TeamPokemon[]);

  useEffect(() => {
    getPokemonTeamQuery().then((pokemonTeam) => setTeam(pokemonTeam));
  }, []);

  return (
    //TODO: Aufgabe 4.2: Provider um App wrappen
    <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <AppBar position="static" sx={{ maxHeight: '64px' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              {pages.map((page) => (
                <Button
                  component={NavLink}
                  key={page.route}
                  to={page.route}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
            {/*TODO: Aufgabe 4.2: Onclick hinzufügen mit POST Request an "Datenbank" */}
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
              Save
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Box display={'flex'} justifyContent={'center'}>
        <Outlet />
      </Box>
    </Paper>
  );
}
