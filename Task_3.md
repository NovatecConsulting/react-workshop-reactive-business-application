
# React Workshop

## Aufgabe 3:

Das Textfeld zur Spitznamenvergebung des gefangenen Pokemons soll mit Validierung erweitert werden.
Aktuell ist es möglich jeglichen Input in das Textfeld zu geben und diesen zu speichern.
Erweitere die Komponente mit einer Validierung, die keine Zahlen zulässt und füge eine aussagekräftige Fehlermeldung hinzu, sofern
das Input vom erwarteten abweicht. Es soll nur möglich sein zu speichern, wenn das Input das korrekte Format hat.

<details>
<summary> Tipp 1 </summary>
<p>
  Die Funktion `test()` nimmt einen Stringwert und überprüft diesen darauf, ob er 
  beispielsweise einem regulären Ausdruck entspricht. Als Return gibt sie true oder false zurück, je nachdem,
  ob der Input akzeptiert würde oder nicht.

```tsx
  someRegularExpression.test(InputStringOfTextfield)
```
</p>

</details>

<details>
<summary> Tipp 2 </summary>
<p>
  Das Textfeld verfügt über die notwendigen props, um einen Fehler anzuzeigen.
  Die Stichworte `error` und `helperText` sollten hier helfen. 

  Daran denken, dass
  auch hier JavaScript übergeben werden kann, um beispielsweise zu evaluieren, ob
  etwas angezeigt werden soll.
</p>

</details>


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
