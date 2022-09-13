import { LiveStorage } from '@mswjs/storage';
import { BasicPokemon } from 'src/types/BasicPokemon';

export interface Pokemon {
  id: string;
  name: string;
  nickname: string;
  level: number;
  img: string;
  moves: Move[];
}

export interface Move {
  id: string;
  name: string;
  learnedAt: number;
}

// create bulbasaur
const moveGrowl: Move = {
  id: '1',
  name: 'Growl',
  learnedAt: 1,
};
const moveTackle: Move = {
  id: '2',
  name: 'Tackle',
  learnedAt: 3,
};
const moveLeechSeed: Move = {
  id: '3',
  name: 'Leech Seed',
  learnedAt: 9,
};
const moveRazorLeaf: Move = {
  id: '4',
  name: 'Razor Leaf',
  learnedAt: 12,
};
const moveVineWhip: Move = {
  id: '5',
  name: 'Vine Whip',
  learnedAt: 13,
};
const movePoisonPowder: Move = {
  id: '6',
  name: 'Poison Powder',
  learnedAt: 15,
};
const moveSeedBomb: Move = {
  id: '7',
  name: 'Seed Bomb',
  learnedAt: 18,
};
const bulbasaur: Pokemon = {
  id: '1',
  name: 'Bulbasaur',
  nickname: '',
  level: 5,
  // img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  img: '/src/assets/pokemon-1.png',
  moves: [
    moveGrowl,
    moveTackle,
    moveVineWhip,
    moveLeechSeed,
    moveRazorLeaf,
    movePoisonPowder,
    moveSeedBomb,
  ],
};

// create charmander
const moveScratch: Move = {
  id: '8',
  name: 'Scratch',
  learnedAt: 1,
};
const moveSmokeScreen: Move = {
  id: '9',
  name: 'Smoke Screen',
  learnedAt: 8,
};
const moveEmber: Move = {
  id: '10',
  name: 'Ember',
  learnedAt: 9,
};
const moveDragonBreath: Move = {
  id: '11',
  name: 'Dragon Breath',
  learnedAt: 12,
};
const moveFireFang: Move = {
  id: '12',
  name: 'Fire Fang',
  learnedAt: 17,
};
const moveSlash: Move = {
  id: '13',
  name: 'Slash',
  learnedAt: 20,
};
const moveFlamethrower: Move = {
  id: '14',
  name: 'Flamethrower',
  learnedAt: 24,
};
const charmander: Pokemon = {
  id: '4',
  name: 'Charmander',
  nickname: '',
  level: 5,
  // img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  img: '/src/assets/pokemon-4.png',
  moves: [
    moveGrowl,
    moveScratch,
    moveEmber,
    moveSmokeScreen,
    moveDragonBreath,
    moveFireFang,
    moveSlash,
    moveFlamethrower,
  ],
};

// create squirtle
const moveTailWhip: Move = {
  id: '25',
  name: 'Tail Whip',
  learnedAt: 1,
};
const moveWaterGun: Move = {
  id: '26',
  name: 'Water Gun',
  learnedAt: 9,
};
const moveRapidSpin: Move = {
  id: '27',
  name: 'Rapid Spin',
  learnedAt: 10,
};
const moveBite: Move = {
  id: '28',
  name: 'Bite',
  learnedAt: 12,
};
const moveWaterPulse: Move = {
  id: '29',
  name: 'Water Pulse',
  learnedAt: 15,
};
const moveProtect: Move = {
  id: '30',
  name: 'Protect',
  learnedAt: 18,
};
const moveAquaTail: Move = {
  id: '31',
  name: 'Aqua Tail',
  learnedAt: 24,
};
const squirtle: Pokemon = {
  id: '7',
  name: 'Squirtle',
  nickname: '',
  level: 5,
  // img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  img: '/src/assets/pokemon-7.png',
  moves: [
    moveTailWhip,
    moveTackle,
    moveWaterGun,
    moveRapidSpin,
    moveBite,
    moveWaterPulse,
    moveProtect,
    moveAquaTail,
  ],
};

interface TeamPokemon extends BasicPokemon {
  teamPokemonId: string;
}

export const pokemonDb = new LiveStorage<Pokemon[]>('pokemon', [bulbasaur, charmander, squirtle]);

export const teamDB = new LiveStorage<TeamPokemon[]>('pokemonTeam', []);
