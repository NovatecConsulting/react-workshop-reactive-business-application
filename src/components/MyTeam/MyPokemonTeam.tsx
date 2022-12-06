import { usePokemonTeamContext } from 'src/context/PokemonTeamContext';
import { Stack, Typography } from '@mui/material';
import { TeamMemberCard } from 'src/components/MyTeam/TeamMemberCard';
import { Link } from "react-router-dom";

export function MyPokemonTeam() {
  // TODO: replace your team with the ones from the context hook
  const pokemonTeam = ""

  if (pokemonTeam.length === 0) return <Typography>Go <Link to='/pokemon-catcher'>catch some Pokemon</Link>!</Typography>;

  return (
    <Stack direction="column" spacing={2} mt={2} width={'450px'}>
    {/*TODO Map your pokemon here using TeamMemberCard*/}
    </Stack>
  );
}
