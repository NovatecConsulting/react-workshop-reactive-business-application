import React, { useState } from 'react';
import { Box, Button, Grid, List, ListItem, Paper, Stack, Typography } from '@mui/material';
import { StyledGridItem } from 'src/components/util/StyledGridItem';
import { useParams } from 'react-router';
import { usePokemonTeamContext } from 'src/context/PokemonTeamContext';
import { MyPokemonDetailHeader } from 'src/components/MyTeam/MyPokemonDetails/MyPokemonDetailHeader';
import { Link } from 'react-router-dom';
import { TeamPokemon } from '../../../types/BasicPokemon';
import { charmanderPokemon } from '../../../mocks/db';

export function MyPokemonDetails() {
  const { teamPokemonId: paramsIdRaw } = useParams<'teamPokemonId'>();
  const teamPokemonId = String(paramsIdRaw);

  const [pokemon, setPokemon] = useState({ teamPokemonId: teamPokemonId, ...charmanderPokemon });

  const [editNicknameMode, setEditNicknameMode] = useState(false);

  if (!pokemon) {
    return (
      <Stack>
        <Typography>Pokemon with id {teamPokemonId} not found!</Typography>
        <Typography>
          Go <Link to="/pokemon-catcher">catch some Pokemon</Link>!
        </Typography>
      </Stack>
    );
  }

  const handleLevelUp = () => {
    console.log('Todo: Implement level up');
  };

  const handleUpdateNickname = (nickname: string) => {};

  return (
    <Paper sx={{ width: 'fit-content', alignSelf: 'center', padding: '1rem 6rem' }}>
      <Box
        display="flex"
        bgcolor={'grey'}
        flexDirection={'column'}
        paddingTop={4}
        alignItems={'center'}
      >
        <Box display="flex" mb={4}>
          <Box maxWidth={'150px'}>
            <img src={`${pokemon.img}`} alt={`pokemon with id ${pokemon.name}`} />
          </Box>
          <List sx={{ marginLeft: '2rem' }}>
            <MyPokemonDetailHeader
              pokemon={pokemon}
              editNicknameMode={editNicknameMode}
              setEditNicknameMode={setEditNicknameMode}
              handleUpdateNickname={handleUpdateNickname}
            />
            <ListItem>
              <Typography variant="subtitle1">Level: {pokemon.level}</Typography>
              <Button
                onClick={handleLevelUp}
                variant="contained"
                sx={{ width: 'fit-content', height: 'fit-content', marginLeft: '4rem' }}
                endIcon={
                  <img
                    width={'32px'}
                    height={'32px'}
                    src={'/src/assets/special_candy.png'}
                    alt={`special-candy`}
                  />
                }
              >
                Level Up
              </Button>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box>
        <Typography variant="subtitle1" pb={2}>
          Attacks:
        </Typography>
        <Grid container spacing={2}>
          {pokemon.moves
            .filter((move) => pokemon.level >= move.learnedAt)
            .map((move) => (
              <Grid item md={6} key={move.name}>
                <StyledGridItem text={move.name} />
              </Grid>
            ))
            .slice(-4)}
        </Grid>
      </Box>
    </Paper>
  );
}
