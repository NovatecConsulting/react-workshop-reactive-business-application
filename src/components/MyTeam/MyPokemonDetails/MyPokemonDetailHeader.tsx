import { Box, IconButton, ListItem, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { ControlledNicknameForm } from 'src/components/MyTeam/MyPokemonDetails/ControlledNicknameForm';
import React from 'react';
import { TeamPokemon } from 'src/types/BasicPokemon';

interface MyPokemonDetailHeaderProps {
  pokemon: TeamPokemon;
  editNicknameMode: boolean;
  setEditNicknameMode: (bool: boolean) => void;
  handleUpdateNickname: (nickname: string) => void;
}

export function MyPokemonDetailHeader(
  {pokemon, editNicknameMode, setEditNicknameMode, handleUpdateNickname } : MyPokemonDetailHeaderProps
) {
  const pokemonNoNicknameElement = <Typography variant="h6">
      No. {pokemon.id}: {pokemon.name}
    </Typography>
  const pokemonWithNicknameElement = <Box>
      <Typography variant="h6">
        {pokemon.nickname}
      </Typography>
      <Typography variant="subtitle2">
        No. {pokemon.id}: {pokemon.name}
      </Typography>
    </Box>

  if (!editNicknameMode)
    return <ListItem sx={{ justifyContent: 'space-between' }}>
      {
        !pokemon.nickname
          ? pokemonNoNicknameElement
          : pokemonWithNicknameElement
      }
      <IconButton
        color="primary"
        aria-label="edit nickname"
        onClick={() => setEditNicknameMode(true)}>
        <EditIcon />
      </IconButton>
    </ListItem>


  return <ListItem>
    <ControlledNicknameForm updateNickname={handleUpdateNickname} value={pokemon.nickname}/>
  </ListItem>
}
