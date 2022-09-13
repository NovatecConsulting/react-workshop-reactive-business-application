import { BasicPokemon, TeamPokemon } from 'src/types/BasicPokemon';

const BASE_API = '/api/v1';

export const getPokemonByIdQuery = (pokemonId: string): Promise<BasicPokemon> =>
  fetch(`${BASE_API}/pokemon/${pokemonId}`).then((response) => response.json());

export const getPokemonTeamQuery = (): Promise<TeamPokemon[]> =>
  fetch(`${BASE_API}/my-team`).then((response) => response.json());

export const savePokemonTeamQuery = (pokemonTeam: TeamPokemon[]): Promise<TeamPokemon[]> =>
  fetch(`${BASE_API}/my-team/save`, {
    method: 'POST',
    body: JSON.stringify(pokemonTeam),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    return response.json();
  });
