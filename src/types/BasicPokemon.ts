export interface BasicPokemon {
  id: string;
  name: string;
  nickname: string;
  level: number;
  img: string;
  moves: Moves[];
}

export interface TeamPokemon extends BasicPokemon {
  teamPokemonId: string;
}
export interface Moves {
  name: string;
  learnedAt: number;
}
