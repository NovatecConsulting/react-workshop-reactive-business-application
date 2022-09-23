export interface BasicPokemon {
  name: string;
  level: number;
  img: string;
  moves: Moves[];
}

export interface Moves {
  name: string;
  learnedAt: number;
}
