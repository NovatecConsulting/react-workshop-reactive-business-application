
# React Workshop

## Aufgabe 3:

Das Textfeld zur Spitznamenvergebung des gefangenen Pokemons soll mit Validierung erweitert werden.
Aktuell ist es möglich jeglichen Input in das Textfeld zu geben und diesen zu speichern.
Erweitere die Komponente mit einer Validierung und füge eine aussagekräftige Fehlermeldung hinzu, sofern
das Input vom erwarteten abweicht. Es soll nur möglich sein zu speichern, wenn das Input das korrekte Format hat.

<details>
  <summary> Lösung </summary>

<p>

ControlledNicknameForm.tsx
```jsx
...
const [error, setError] = useState(false)
...
const handleChange= (event) =>{
    const value: String = event.target.value
    setState(value);
    setError(!/^([^0-9]*)$/g.test(value)) // Does not allow numbers
}

...
event.preventDefault()
if (!error) updateNickname(state)}
...
onChange={handleChange}
error={error}
helperText={error ? 'Es sind nur Buchstaben erlaubt' : ''}
```
</p>
</details>
