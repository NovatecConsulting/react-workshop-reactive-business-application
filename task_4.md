
# React Workshop

## Aufgabe 4.1:
Aufgabe ist es die Pokemon in der `PokemonCatcher` Komponente aus der "Datenbank" zu laden.
Dies erfolgt über eine HTTP GET Anfrage. Hierzu gibt es in `src/api/index.ts` die Funktion `getStarterPokemon()`, die verwendet werden kann.
Es sollen die zurückgegeben Pokemon dann in in die `PokemonChoice` Komponente übergeben werden.


<details>
<summary> Tipp 1 </summary>

An `useEffect()` erinnern, um beim Laden der Komponente initial die Daten zu laden.

</details>

<details>
<summary> Tipp 2</summary>

Die Funktion `map()` auf die geladenen Pokemon aufrufen, um über deren Einträge zu iterieren


</details>

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

## Aufgabe 4.2:
Der `Save` Button, der sich oben rechts in der Applikation befindet soll nun Funktionalität bekommen.
Auf Knopfdruck soll eine HTTP POST Anfrage geschickt werden, um den aktuellen Kontext zu persistieren.

Hierfür fehlen zwei Teile:
1. Der Kontext muss benutzt werden, um das Team aktuell zu halten
2. Der Inhalt des Kontextes muss auf Knopfdruck an die "Datenbank" geschickt werden.

Der Kontext ist in `PokemonTeamContext` zu finden und muss nicht selbst definiert werden.

Wenn diese Aufgabe richtig gelöst wurde, wird das Team korrekt unter `my-team` angezeigt und 
auch nach einem Neuladen der Seite noch vorhanden sein.

*Dies wird im Sessionkontext des Browsers gespeichert.*

### Bonus
Das Team hat eine Maximalgröße von 6 Pokemon.


<details>
  <summary> Tipp 1</summary>

<p>

Die TODOs finden und Schritt für Schritt umsetzen.
Dies ist die schwerste Aufgabe, nicht zögern zu fragen!

</p>

</details>

<details>
  <summary> Tipp 2</summary>

<p>
  Kontext in `App.tsx` wie folgt initialisieren:
  
```tsx
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

```

</p>

</details>


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
    onClick={() => savePokemonTeamQuery(team)}
...    
</PokemonTeamProvider>
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
...
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
