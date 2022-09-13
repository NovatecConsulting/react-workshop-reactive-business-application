import MyPokemon from "./MyPokemon/MyPokemon";
import PokemonChooser from "./PokemonChooser/PokemonChooser";
import {useState} from "react";


export default function PokemonDashboard() {
  const [selectedStarterPokemon, setSelectedStarterPokemon] = useState('')

  return <>
    {selectedStarterPokemon === '' ? <PokemonChooser onSelectPokemon={setSelectedStarterPokemon}/> : <MyPokemon pokemonId={selectedStarterPokemon}></MyPokemon>}
  </>
}
