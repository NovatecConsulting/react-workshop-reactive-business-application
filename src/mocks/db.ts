import { factory, primaryKey, manyOf } from "@mswjs/data";

export const db = factory({
  moves: {
    id: primaryKey(String),
    name: String,
    learnedAt: Number,
  },
  pokemon: {
    id: primaryKey(String),
    name: String,
    nickname: String,
    level: Number,
    img: String,
    moves: manyOf("moves"),
  },
});

// create bulbasaur
const moveGrowl = db.moves.create({
  id: "1",
  name: "Growl",
  learnedAt: 1,
});
const moveTackle = db.moves.create({
  id: "2",
  name: "Tackle",
  learnedAt: 1,
});
const moveVineWhip = db.moves.create({
  id: "3",
  name: "Vine Whip",
  learnedAt: 13,
});
const bulbasaur = db.pokemon.create({
  id: "1",
  name: "Bulbasaur",
  nickname: "",
  level: 5,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  moves: [moveGrowl, moveTackle, moveVineWhip],
});

// create charmander
const moveScratch = db.moves.create({
  id: "4",
  name: "Scratch",
  learnedAt: 1,
});
const moveEmber = db.moves.create({
  id: "5",
  name: "Ember",
  learnedAt: 9,
});
const charmander = db.pokemon.create({
  id: "4",
  name: "Charmander",
  nickname: "",
  level: 5,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  moves: [moveGrowl, moveScratch, moveEmber],
});

// create squirtle
const moveTailWhip = db.moves.create({
  id: "6",
  name: "Tail Whip",
  learnedAt: 1,
});
const moveWaterGun = db.moves.create({
  id: "7",
  name: "Water Gun",
  learnedAt: 9,
});
const squirtle = db.pokemon.create({
  id: "7",
  name: "Squirtle",
  nickname: "",
  level: 5,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  moves: [moveTailWhip, moveTackle, moveWaterGun],
});
