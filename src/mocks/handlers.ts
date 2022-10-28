import { rest } from "msw";
import { pokemonDb } from "./db";

export const handlers = [
  rest.get("/api/v1/my-pokemon/:id", (req, res, ctx) => {
    const { id } = req.params;

    const pokemon = pokemonDb.getValue().find(p => p.id === id);

    if (!pokemon) {
      return res(ctx.status(400, `Pokemon with id '${name}' not found`));
    }
    return res(ctx.json(pokemon));
  }),

  rest.post("/api/v1/my-pokemon/:id/level-up", async (req, res, ctx) => {
    const { id } = req.params;

    const foundPokemon = pokemonDb.getValue().find(p => p.id === id);

    if (!foundPokemon) {
      return res(ctx.status(400, `Pokemon with id '${id}' not found`));
    }

    pokemonDb.update((currentPokemon) => {
      let pokemon1 = currentPokemon.find((p) => p.id === id);
      pokemon1.level = pokemon1.level + 1;
      currentPokemon.splice(currentPokemon.indexOf(pokemon1), 1, pokemon1);
      return currentPokemon;
    });

    const updatedPokemon = pokemonDb.getValue().find(p => p.id === id);

    return res(ctx.json(updatedPokemon));
  }),

  rest.post("/api/v1/my-pokemon/:id/set-nickname", async (req, res, ctx) => {
    const { id } = req.params;

    const foundPokemon = pokemonDb.getValue().find(p => p.id === id);

    if (!foundPokemon) {
      return res(ctx.status(400, `Pokemon with id '${id}' not found`));
    }

    const { nickname } = await req.json();

    pokemonDb.update((currentPokemon) => {
      let pokemon1 = currentPokemon.find((p) => p.id === id);
      pokemon1.nickname = nickname;
      currentPokemon.splice(currentPokemon.indexOf(pokemon1), 1, pokemon1);
      return currentPokemon;
    });

    const updatedPokemon = pokemonDb.getValue().find(p => p.id === id);

    return res(ctx.json(updatedPokemon));
  }),
];
