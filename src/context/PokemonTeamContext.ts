import React, { useContext } from 'react';
import { TeamPokemon } from 'src/types/BasicPokemon';

export interface PokemonTeamContextValue {
  pokemonTeam: TeamPokemon[];
  addPokemonToTeam: (pokemon: TeamPokemon) => void;
  updatePokemon: (pokemon: TeamPokemon) => void;
}

/**
 * Saves the Team ids in a react context
 */
export const PokemonTeamContext = React.createContext<PokemonTeamContextValue>(
  {} as PokemonTeamContextValue
);

export const usePokemonTeamContext = () => useContext(PokemonTeamContext);
export const PokemonTeamProvider = PokemonTeamContext.Provider;
