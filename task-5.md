## task 5.1:
Get starter pokemon via HTTP GET Request.
Just call the `getStarterPokemon()` function from the file `src/api/index.ts`

### Solution:
```tsx
// define a state where the pokemon can be held
const [starterPokemon, setStarterPokemon] = useState<BasicPokemon[]>([]);

// call the getStarterPokemon() function in the useEffect hook
useEffect(() => {
getStarterPokemon().then((pokemon) => setStarterPokemon(pokemon));
}, []);
```

```tsx
// in the template loop over the starterPokemon:
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
