import { LiveStorage } from '@mswjs/storage'

export interface Pokemon {
  id: string,
  name: string
  nickname: string,
  level: number,
  img: string,
  moves: Move[]
}

export interface Move {
  id: string,
  name: string,
  learnedAt: number
}

// create bulbasaur
const moveGrowl: Move = {
  id: "1",
  name: "Growl",
  learnedAt: 1,
}
const moveTackle: Move = {
  id: "2",
  name: "Tackle",
  learnedAt: 1,
}
const moveVineWhip: Move = {
  id: "3",
  name: "Vine Whip",
  learnedAt: 13,
}
const bulbasaur: Pokemon = {
  id: "1",
  name: "Bulbasaur",
  nickname: "",
  level: 5,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  moves: [moveGrowl, moveTackle, moveVineWhip],
}

// create charmander
const moveScratch: Move = {
  id: "4",
  name: "Scratch",
  learnedAt: 1,
}
const moveEmber: Move = {
  id: "5",
  name: "Ember",
  learnedAt: 9,
}
const charmander: Pokemon = {
  id: "4",
  name: "Charmander",
  nickname: "",
  level: 5,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  moves: [moveGrowl, moveScratch, moveEmber],
}

// create squirtle
const moveTailWhip: Move = {
  id: "6",
  name: "Tail Whip",
  learnedAt: 1,
}
const moveWaterGun: Move = {
  id: "7",
  name: "Water Gun",
  learnedAt: 9,
}
const squirtle: Pokemon = {
  id: "7",
  name: "Squirtle",
  nickname: "",
  level: 5,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  moves: [moveTailWhip, moveTackle, moveWaterGun],
}

export const pokemonDb = new LiveStorage<Pokemon[]>('pokemon',
  [bulbasaur, charmander, squirtle]
)
