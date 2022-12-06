import { Box, Button, Stack } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonChoice } from 'src/components/PokemonCatcher/PokemonChoice';
import { usePokemonTeamContext } from 'src/context/PokemonTeamContext';
import { BasicPokemon } from 'src/types/BasicPokemon';
import { getStarterPokemon } from "../../api";

export function PokemonCatcher() {
  const [currentlySelectedPokemon, setCurrentlySelectedPokemon] = useState<BasicPokemon>();
  const { addPokemonToTeam } = usePokemonTeamContext();
  const navigate = useNavigate();

  const handlePokemonCatched = async () => {
    if (currentlySelectedPokemon) {
      const teamPokemonId = crypto.randomUUID();
      addPokemonToTeam({ teamPokemonId, ...currentlySelectedPokemon });
      navigate(`/my-team/${teamPokemonId}`);
    }
  };

  // TODO: Task-5.1: replace hard coded starter pokemon with HTTP GET request (getStarterPokemon())
  const bulbasaur: BasicPokemon = {
    id: '1',
    name: 'Bulbasaur',
    level: 5,
    img: '/src/assets/pokemon-1.png',
    nickname: '',
    moves: []
  };
  const charmander: BasicPokemon = {
    id: '4',
    name: 'Charmander',
    level: 5,
    img: '/src/assets/pokemon-4.png',
    nickname: '',
    moves: []
  };
  const squirtle: BasicPokemon = {
    id: '7',
    name: 'Squirtle',
    level: 5,
    img: '/src/assets/pokemon-7.png',
    nickname: '',
    moves: []
  };

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Stack
        direction="row"
        height="300px"
        width="100%"
        justifyContent="center"
        spacing={16}
        marginBottom="24px"
      >
        {/*TODO: Task-5.1: loop over starterPokemon */}
        <PokemonChoice
          pokemon={bulbasaur}
          isSelected={currentlySelectedPokemon?.id === bulbasaur.id}
          onSelectPokemon={setCurrentlySelectedPokemon}
        />
        <PokemonChoice
          pokemon={charmander}
          isSelected={currentlySelectedPokemon?.id === charmander.id}
          onSelectPokemon={setCurrentlySelectedPokemon}
        />
        <PokemonChoice
          pokemon={squirtle}
          isSelected={currentlySelectedPokemon?.id === squirtle.id}
          onSelectPokemon={setCurrentlySelectedPokemon}
        />
      </Stack>

      <Button
        onClick={handlePokemonCatched}
        variant="contained"
        sx={{ width: 'fit-content', alignSelf: 'center' }}
        disabled={!currentlySelectedPokemon}
      >
        Catch
      </Button>
    </Box>
  );
}
