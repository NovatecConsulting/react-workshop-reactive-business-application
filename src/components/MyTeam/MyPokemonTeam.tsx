import { usePokemonTeamContext } from 'src/context/PokemonTeamContext';
import { Stack, Typography } from '@mui/material';
import { TeamMemberCard } from 'src/components/MyTeam/TeamMemberCard';
import { Link } from 'react-router-dom';
import { TeamPokemon } from '../../types/BasicPokemon';

export function MyPokemonTeam() {
  // TODO: Aufgabe 4.2: Team aus Kontext laden
  const pokemonTeam: TeamPokemon[] = [];

  if (pokemonTeam.length === 0)
    return (
      <Typography>
        Go <Link to="/pokemon-catcher">catch some Pokemon</Link>!
      </Typography>
    );

  return (
    <Stack direction="column" spacing={2} mt={2} width={'450px'}>
      {pokemonTeam.map((pokemon, index) => (
        <TeamMemberCard key={index} pokemon={pokemon} />
      ))}
    </Stack>
  );
}
