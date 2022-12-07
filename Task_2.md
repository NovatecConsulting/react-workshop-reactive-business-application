
# React Workshop

## Aufgabe 2:
Es ist noch nicht möglich mithilfe von Sonderbonbons das Pokemon zu leveln. Ebenso kann ein vermeintlicher Spitzname
noch nicht gespeichert werden. Dies soll in dieser Aufgabe mit `useState()` gelöst werden.
Es soll also je nach Button der State der Komponente so angepasst werden, dass entweder das Level um 1 erhöht wird 
(Sonderbonbon/Level Up) Button oder der Spitzname gespeichert werden kann.

<details>
  <summary> Lösung </summary>

<p>

MyPokemonDetails.tsx
```jsx
...
setPokemon((prevState) => {
    const newState = { ...prevState, level: ++prevState.level };
    return newState;
});
...
setPokemon((prevState) => {
    const newState = { ...prevState, nickname: nickname };
    setEditNicknameMode(false);
    return newState;
});
...

```
</p>
</details>
