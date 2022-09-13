import { usePokemonTeamContext } from 'src/context/PokemonTeamContext';
import { Stack, Typography } from '@mui/material';
import { TeamMemberCard } from 'src/components/MyTeam/TeamMemberCard';

export function MyPokemonTeam() {
  const { pokemonTeam } = usePokemonTeamContext();

  if (pokemonTeam.length === 0) return <Typography>Go catch some Pokemon !</Typography>;

  return (
    <Stack direction="column" spacing={2} mt={2} width={'450px'}>
      {pokemonTeam.map((pokemon, index) => (
        <TeamMemberCard key={index} pokemon={pokemon} />
      ))}
    </Stack>
  );
}
