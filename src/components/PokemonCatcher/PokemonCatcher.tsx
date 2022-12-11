import { Box, Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonChoice } from 'src/components/PokemonCatcher/PokemonChoice';
import { usePokemonTeamContext } from 'src/context/PokemonTeamContext';
import { BasicPokemon } from 'src/types/BasicPokemon';
import { getStarterPokemon } from '../../api';
import { bulbasaurPokemon, charmanderPokemon, squirtlePokemon } from '../../mocks/db';

export function PokemonCatcher() {
  const [currentlySelectedPokemon, setCurrentlySelectedPokemon] = useState<BasicPokemon>();
  const navigate = useNavigate();
  // TODO: Aufgabe 4.2: Funktion zum Pokemon hinzufügen aus Kontext laden

  const handlePokemonCatched = async () => {
    if (currentlySelectedPokemon) {
      const teamPokemonId = crypto.randomUUID();
      // TODO: Aufgabe 4.2: Pokemon zu Kontext hinzufügen
      navigate(`/my-team/${teamPokemonId}`);
    }
  };

  // TODO: Aufgabe 4.1: Hardcoded Starter ersetzen
  const bulbasaur: BasicPokemon = bulbasaurPokemon;
  const charmander: BasicPokemon = charmanderPokemon;
  const squirtle: BasicPokemon = squirtlePokemon;

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
        {/*TODO: Aufgabe 4.1: Über Starter iterieren */}
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
