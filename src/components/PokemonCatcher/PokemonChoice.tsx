import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { BasicPokemon } from 'src/types/BasicPokemon';

// Todo Aufgabe 2 Parameter anpassen
export function PokemonChoice({ pokemon }: { pokemon: BasicPokemon }) {
  // Todo Aufgabe 2 State nicht mehr in Kindkomponente setzen
  const [selectedPokemon, setSelectedPokemon] = useState(false);

  const handlePokeballClick = () => {
    // Todo Aufgabe 2 State in Elternkomponente setzen
    console.log(`Derzeit ausgewähltes Pokemon: ${pokemon?.name}`);
    setSelectedPokemon(!selectedPokemon);
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignSelf="end"
      width={'100px'}
      alignItems={'center'}
    >
      {/*Todo Aufgabe 2 Bedingung anpassen, dass nur ein Pokemon gleichzeitig angezeigt wird*/}
      {selectedPokemon && (
        <>
          <img width={'100px'} src={`${pokemon?.img}`} alt={`pokemon with name ${pokemon.name}`} />
          <Typography>{pokemon?.name}</Typography>
        </>
      )}
      <IconButton onClick={handlePokeballClick} sx={{ width: 'fit-content' }}>
        <img
          width={'48px'}
          height={'48px'}
          src={'src/assets/pokeball_closed.png'}
          alt={`pokeball_closed`}
        />
      </IconButton>
    </Box>
  );
}
