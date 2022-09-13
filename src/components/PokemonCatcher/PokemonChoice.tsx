import React, { useEffect, useState } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { PokeballButton } from 'src/components/PokemonCatcher/PokemonSelection/PokeballButton';
import { BasicPokemon, TeamPokemon } from 'src/types/BasicPokemon';
import { getPokemonByIdQuery } from 'src/api';

export function PokemonChoice({
  id,
  isSelected,
  onSelectPokemon,
}: {
  id: string;
  isSelected: boolean;
  onSelectPokemon: (pokemon: BasicPokemon) => void;
}) {
  const [pokemon, setPokemon] = useState<BasicPokemon>();

  useEffect(() => {
    getPokemonByIdQuery(id).then((basicPokemon) => setPokemon(basicPokemon));
  }, []);

  const handlePokeballClick = () => {
    if (pokemon) {
      onSelectPokemon(pokemon);
    }
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignSelf="end"
      width={'100px'}
      alignItems={'center'}
    >
      {isSelected && <img width={'100px'} src={`${pokemon?.img}`} alt={`pokemon with id ${id}`} />}
      <IconButton onClick={handlePokeballClick} sx={{width: 'fit-content'}}>
        <img width={'48px'} height={'48px'}
             src={'src/assets/pokeball_closed.png'}
             alt={`pokeball_closed`}
        />
      </IconButton>
    </Box>
  );
}
