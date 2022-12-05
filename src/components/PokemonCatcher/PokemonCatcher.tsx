import { Box, Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonChoice } from 'src/components/PokemonCatcher/PokemonChoice';
import { usePokemonTeamContext } from 'src/context/PokemonTeamContext';
import { BasicPokemon } from 'src/types/BasicPokemon';

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
        <PokemonChoice
          id="1"
          onSelectPokemon={setCurrentlySelectedPokemon}
          isSelected={currentlySelectedPokemon?.id === '1'}
        />
        <PokemonChoice
          id="4"
          onSelectPokemon={setCurrentlySelectedPokemon}
          isSelected={currentlySelectedPokemon?.id === '4'}
        />
        <PokemonChoice
          id="7"
          onSelectPokemon={setCurrentlySelectedPokemon}
          isSelected={currentlySelectedPokemon?.id === '7'}
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
