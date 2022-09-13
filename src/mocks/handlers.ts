import { rest } from 'msw';
import { pokemonDb, teamDB } from './db';
import { uuidv4 } from '@mswjs/interceptors/lib/utils/uuid';
import { TeamPokemon } from 'src/types/BasicPokemon';

export const handlers = [
  rest.get('/api/v1/pokemon/:id', (req, res, ctx) => {
    const { id } = req.params;

    const pokemon = pokemonDb.getValue().find((p) => p.id === id);

    if (!pokemon) {
      return res(ctx.status(400, `Pokemon with id '${name}' not found`));
    }
    return res(ctx.json(pokemon));
  }),

  rest.get('/api/v1/my-team', (req, res, ctx) => {
    return res(ctx.json(teamDB.getValue()));
  }),

  rest.post('/api/v1/my-team/save', async (req, res, ctx) => {
    const pokemonTeam = await req.json();

    if (!pokemonTeam || !pokemonTeam.length) {
      return res(ctx.status(400, `Invalid body: ${pokemonTeam} `));
    }
    teamDB.update(() => {
      return pokemonTeam;
    });

    const updatedTeam = teamDB.getValue();

    return res(ctx.json(updatedTeam));
  }),
];
