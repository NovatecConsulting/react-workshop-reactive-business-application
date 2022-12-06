import {Pokemon, pokemonDb, teamDB, TeamPokemon} from "./db";

export const startInterceptor = async () => {
  const { fetch: originalFetch } = window;
  window.fetch = async (url: string, init?: RequestInit): Promise<Response> => {
    if (url.startsWith('/api/v1/')) {
      const response = handleEndpoints(url, init);
      if (response.data && response.status === 200) {
        const result = new Response(JSON.stringify(response.data));
        return Promise.resolve(result);
      }
      if (response.status !== 200) {
        const result = new Response(null!, {
          statusText: response.statusText,
          status: response.status
        })
        return Promise.reject(result);
      }
    }
    return originalFetch(url, init);
  };
};

const handleEndpoints = (url: string, init?: RequestInit): CustomResponse<any> => {
  const endpoint = url.replace('/api/v1/', '');
  if (endpoint === 'my-team') {
    return getMyTeam();
  }
  const matches = endpoint.match(/pokemon\/(.*)/);
  if (matches && matches.length > 0) {
    return getPokemonById(matches[1]);
  }
  if (endpoint.startsWith('my-team/save')) {
    return saveMyTeam(JSON.parse(init?.body as string) as TeamPokemon[]);
  }
  return new CustomResponse({
    status: 400,
    statusText: `could not find endpoint ${url}`
  });
};

interface CustomResponseInput<T> {
  data: T;
  status: number;
  statusText: string;
}

class CustomResponse<T> {
  status: number = 200
  statusText: string = "";
  data: T;
  constructor(input: Partial<CustomResponseInput<T>>) {
    if (input.data) {
      this.data = input.data
    }
    if (input.status) {
      this.status = input.status;
    }
    if (input.statusText) {
      this.statusText = input.statusText;
    }
  }
}

const getMyTeam = (): CustomResponse<TeamPokemon[]> => {
  return new CustomResponse<TeamPokemon[]>({
    data: teamDB.getValue()
  });
};

const getPokemonById = (id: string): CustomResponse<Pokemon> => {
  const pokemon = pokemonDb.getValue().find((p) => p.id === id);

  if (!pokemon) {
    return new CustomResponse({
      status: 400,
      statusText: `Pokemon with id '${id}' not found`
    });
  }

  return new CustomResponse<Pokemon>({data: pokemon});
}

const saveMyTeam = (pokemonTeam: TeamPokemon[]): CustomResponse<TeamPokemon[]> => {
  if (!pokemonTeam || !pokemonTeam.length) {
    return new CustomResponse({
      status: 400,
      statusText: `invalid body: ${pokemonTeam}`
    });
  }

  teamDB.update(() => {
    return pokemonTeam;
  });

  return new CustomResponse<TeamPokemon[]>({data: teamDB.getValue()});
};


