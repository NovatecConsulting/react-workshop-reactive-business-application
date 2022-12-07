
# React Workshop

## Aufgabe 5.1:
Aufgabe ist es die Pokemon in der `PokemonCatcher` Komponente aus der "Datenbank" zu laden.
Dies erfolgt über eine HTTP GET Anfrage. Hierzu gibt es in `src/api/index.ts` die Funktion `getStarterPokemon()`, die verwendet werden kann.

<details>
  <summary> Lösung </summary>

<p>

```tsx
// den State definieren, in dem die Pokemon gehalten werden
const [starterPokemon, setStarterPokemon] = useState<BasicPokemon[]>([]);

// die Funktion aufrufen, um die Pokemon beim Rendern der Komponente zu laden
// und diese im State speichern
useEffect(() => {
  getStarterPokemon().then((pokemon) => setStarterPokemon(pokemon));
}, []);
```

```tsx
// über die Pokemon im State loopen (map() Aufruf)
return (
  // ...
  {starterPokemon.map((pokemon) => (
    <PokemonChoice
      key={pokemon.id}
      pokemon={pokemon}
      onSelectPokemon={setCurrentlySelectedPokemon}
      isSelected={currentlySelectedPokemon?.id === pokemon.id}
    />
  ))}
  // ...
)
```

</p>
</details>

## task 5.2:
Der `Save` Button, der sich oben rechts in der Applikation befindet soll nun Funktionalität bekommen.
Auf Knopfdruck soll eine HTTP POST Anfrage geschickt werden, um den aktuellen Kontext zu persistieren.

Hierfür fehlen noch zwei Puzzleteile:
1. Der Kontext muss auch tatsächlich benutzt werden, um das Team aktuell zu halten
2. Der Kontext muss auf Knopfdruck an die "Datenbank" geschickt werden.


Wenn diese Aufgabe richtig gelöst wurde, wird das Team auch nach einem Neuladen der Seite noch vorhanden sein.

*Dies wird im Sessionkontext des Browsers gespeichert.*

### Bonus
Das Team hat eine Maximalgröße von 6 Pokemon.

<details>
  <summary> Lösung </summary>

<p>

App.tsx
```jsx
const contextValue: PokemonTeamContextValue = {
pokemonTeam: team,
addPokemonToTeam: (pokemon: TeamPokemon) => {
  setTeam((prevState) => {
    return [...prevState, pokemon].splice(-6);
  });
},
updatePokemon: (pokemon: TeamPokemon) => {
  setTeam((prevState) => {
    const index = team.findIndex((p) => p.teamPokemonId === pokemon.teamPokemonId);
    prevState.splice(index, 1, pokemon);
    return prevState;
  });
},
};
...
<PokemonTeamProvider value={contextValue}>
...
</PokemonTeamProvider>
```

PokemonTeamContextValue.tsx
```jsx
export interface PokemonTeamContextValue {
  pokemonTeam: TeamPokemon[];
  addPokemonToTeam: (pokemon: TeamPokemon) => void;
  updatePokemon: (pokemon: TeamPokemon) => void;
}

/**
 * Saves the Team ids in a react context
 */
export const PokemonTeamContext = React.createContext<PokemonTeamContextValue>(
  {} as PokemonTeamContextValue
);

export const usePokemonTeamContext = () => useContext(PokemonTeamContext)
export const PokemonTeamProvider = PokemonTeamContext.Provider;

```

PokemonCatcher.tsx
```jsx
...
const { addPokemonToTeam } = usePokemonTeamContext();
...
addPokemonToTeam({ teamPokemonId, ...currentlySelectedPokemon });
...
```

MyPokemonTeam.tsx
```jsx
  const { pokemonTeam } = usePokemonTeamContext();
```

MyPokemonDetails.tsx
```jsx
const { pokemonTeam, updatePokemon } = usePokemonTeamContext();
...
pokemonTeam.find((teamMember) => teamMember.teamPokemonId === teamPokemonId)
...
updatePokemon(newState);
...
updatePokemon(newState);
...

```

</p>
</details>
