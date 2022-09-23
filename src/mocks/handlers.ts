import { rest } from 'msw'
import { db } from "./db"

export const handlers = [
  rest.get('/api/v1/my-pokemon/:id', (req, res, ctx) => {
    const {id} = req.params;

    const pokemon = db.pokemon.findFirst({
      where: {
        id: {
          equals: id
        },
      }
    })

    if (!pokemon) {
      return res(ctx.status(400, `Pokemon with id '${name}' not found`))
    }
    return res(ctx.json(pokemon));
  }),

  rest.post('/api/v1/my-pokemon/:id/set-level', async (req, res, ctx) => {
    const {id} = req.params;

    const { level } = await req.json();
    console.log(level);

    const pokemon = db.pokemon.update({
      where: {
        id: {
          equals: id,
        }
      },
      data: {
        level: level
      }
    })

    if (!pokemon) {
      return res(ctx.status(400, `Pokemon with id '${id}' not found`))
    }

    return res(ctx.json(pokemon));
  }),
]
