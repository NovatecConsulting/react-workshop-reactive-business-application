MyPokemonTeam.tsx
```jsx
...
  const { pokemonTeam } = usePokemonTeamContext();
...
{pokemonTeam.map((pokemon, index) => (
    <TeamMemberCard key={index} pokemon={pokemon} />
))}
```
