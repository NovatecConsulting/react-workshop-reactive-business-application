import { rest } from "msw";
import { db } from "./db";

export const handlers = [
  rest.get("/api/v1/my-pokemon/:id", (req, res, ctx) => {
    const { id } = req.params;

    const pokemon = db.pokemon.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });

    if (!pokemon) {
      return res(ctx.status(400, `Pokemon with id '${name}' not found`));
    }
    return res(ctx.json(pokemon));
  }),

  rest.post("/api/v1/my-pokemon/:id/level-up", async (req, res, ctx) => {
    const { id } = req.params;

    const foundPokemon = db.pokemon.findFirst({
      where: {
        id: {
          equals: id,
        },
      }
    })

    if (!foundPokemon) {
      return res(ctx.status(400, `Pokemon with id '${id}' not found`));
    }

    const newLevel = foundPokemon.level + 1;

    const pokemon = db.pokemon.update({
      where: {
        id: {
          equals: id,
        },
      },
      data: {
        level: newLevel,
      },
    });

    return res(ctx.json(pokemon));
  }),

  rest.post("/api/v1/my-pokemon/:id/set-nickname", async (req, res, ctx) => {
    const { id } = req.params;

    const { nickname } = await req.json();

    const pokemon = db.pokemon.update({
      where: {
        id: {
          equals: id,
        },
      },
      data: {
        nickname: nickname,
      },
    });

    if (!pokemon) {
      return res(ctx.status(400, `Pokemon with id '${id}' not found`));
    }

    return res(ctx.json(pokemon));
  }),
];
