
# React Workshop

## Task 1 - Parent Child Communication

Die erste Aufgabe des Workshops ist es in der Komponente `PokemonCatcher` die Kommunikation
zwischen der **Parent-(/Eltern-) Komponente** und den drei **Child-(/Kinder-) Komponenten** herzustellen.

Ziel ist es, dass immer nur ein Pokemon auf Klick des dazugehörigen Pokeballs ausgewählt werden kann,
dieses dann angezeigt wird und der "Catch" ("Fangen") Knopf aktiviert wird. Auf Knopfdruck soll man mithilfe des Routers
auf `/my-team` gelangen.

<details>
  <summary> Tipp 1 </summary>

  <p>

  Zuerst lohnt es sich die `PokemonCatcher.tsx` Datei anzuschauen und die Kindkomponente zu identifizieren.
  Hier besonderes Augenmerk auf die Definition der Komponente legen.

  </p>
</details>


<details>
  <summary> Lösung </summary>
<p>

PokemonChoice.tsx
```jsx
...
onSelectPokemon(pokemon);
...
```

PokemonCatcher.tsx
```jsx
...
const navigate = useNavigate();
...
navigate(`/my-team/);
...
onSelectPokemon={setCurrentlySelectedPokemon}
isSelected={currentlySelectedPokemon?.id === pokemon.id}
...
```
</p>
</details>

### Bonus: 
Typisiere alle Parameter, die du übergibst
