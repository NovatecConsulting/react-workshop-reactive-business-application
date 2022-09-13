import { BasicPokemon, TeamPokemon } from 'src/types/BasicPokemon';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export function TeamMemberCard({ pokemon }: { pokemon: TeamPokemon }) {
  return (
    <Paper
      component={NavLink}
      key={'my-team-redirect'}
      to={`/my-team/${pokemon.teamPokemonId}`}
      className={'team-member-card'}
      elevation={4}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        padding: '1rem',
        justifyContent: 'space-between',
        textDecoration: 'none',
      }}
    >
      <Box display="flex" flexDirection="row">
        <img width="50px" src={pokemon.img} />
        <Box display="flex" flexDirection="column" pl={4}>
          <Typography variant={'subtitle1'}>
            {pokemon.nickname ? pokemon.nickname : pokemon.name}
          </Typography>
          <Typography variant={'subtitle2'}>Level: {pokemon.level}</Typography>
        </Box>
      </Box>
      <Box>
        <img
          width={'16px'}
          height={'16px'}
          src={'src/assets/pokeball_closed.png'}
          alt={`pokeball_closed`}
        />
      </Box>
    </Paper>
  );
}
