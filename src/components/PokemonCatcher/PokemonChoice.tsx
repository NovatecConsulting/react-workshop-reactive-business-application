import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { BasicPokemon } from 'src/types/BasicPokemon';

export function PokemonChoice({ pokemon }: { pokemon: BasicPokemon }) {
  const [selectedPokemon, setSelectedPokemon] = useState(false);

  const handlePokeballClick = () => {
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
