import { factory, primaryKey, manyOf } from '@mswjs/data'

export const db = factory({
  moves: {
    id: primaryKey(String),
    name: String,
    learned_at: Number
  },
  pokemon: {
    id: primaryKey(String),
    name: String,
    level: Number,
    img: String,
    moves: manyOf('moves')
  }
});

// create bulbasaur
const moveGrowl = db.moves.create({
  id: '1',
  name: 'Growl',
  learned_at: 1,
});
const moveTackle = db.moves.create({
  id: '2',
  name: 'Tackle',
  learned_at: 1,
});
const moveVineWhip = db.moves.create({
  id: '3',
  name: 'Vine Whip',
  learned_at: 3,
});
const bulbasaur = db.pokemon.create({
  id: '1',
  name: "Bulbasaur",
  level: 5,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  moves: [moveGrowl, moveTackle, moveVineWhip]
})

// create charmander
const moveScratch = db.moves.create({
  id: '4',
  name: 'Scratch',
  learned_at: 1,
});
const moveEmber = db.moves.create({
  id: '5',
  name: 'Ember',
  learned_at: 4,
});
const charmander = db.pokemon.create({
  id: '4',
  name: "Squirtle",
  level: 5,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  moves: [moveGrowl, moveScratch, moveEmber]
});

// create squirtle
const moveTailWhip = db.moves.create({
  id: '6',
  name: 'Tail Whip',
  learned_at: 1,
});
const moveWaterGun = db.moves.create({
  id: '7',
  name: 'Water Gun',
  learned_at: 3,
});
const squirtle = db.pokemon.create({
  id: '7',
  name: "Squirtle",
  level: 5,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  moves: [moveTailWhip, moveTackle, moveWaterGun]
});
