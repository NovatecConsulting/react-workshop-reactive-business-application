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

  const [starterPokemon, setStarterPokemon] = useState<BasicPokemon[]>([]);

  useEffect(() => {
    getStarterPokemon().then((pokemon) => setStarterPokemon(pokemon));
  }, []);

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
        {starterPokemon.map((pokemon) => (
          <PokemonChoice
            key={pokemon.id}
            pokemon={pokemon}
            onSelectPokemon={setCurrentlySelectedPokemon}
            isSelected={currentlySelectedPokemon?.id === pokemon.id}
          />
        ))}
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
