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

  const [team, setTeam] = useState([] as TeamPokemon[]);
  const contextValue: PokemonTeamContextValue = {
    pokemonTeam: team,
    addPokemonToTeam: (pokemon: TeamPokemon) => {
      setTeam((prevState) => {
        return [...prevState, pokemon].splice(-6);
      });
    },
    updatePokemon: (pokemon: TeamPokemon) => {
      setTeam((prevState) => {
        const index = team.findIndex((p) => p.teamPokemonId === pokemon.teamPokemonId);
        prevState.splice(index, 1, pokemon);
        return prevState;
      });
    },
  };

  useEffect(() => {
    getPokemonTeamQuery().then((pokemonTeam) => setTeam(pokemonTeam));
  }, []);

  return (
    <PokemonTeamProvider value={contextValue}>
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
              <Button
                variant="outlined"
                onClick={() => savePokemonTeamQuery(team)}
                sx={{ color: 'white', borderColor: 'white' }}
              >
                Save
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
        <Box display={'flex'} justifyContent={'center'}>
          <Outlet />
        </Box>
      </Paper>
    </PokemonTeamProvider>
  );
}
