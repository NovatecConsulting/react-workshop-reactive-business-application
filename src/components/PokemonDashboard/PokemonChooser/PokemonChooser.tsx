import {Button, IconButton, Stack} from "@mui/material";
import React, {useState} from "react";

export default function PokemonChooser({ onSelectPokemon } : {onSelectPokemon: (id: string) => void}) {
  const [currentlySelectedPokemonId, setCurrentlySelectedPokemonId] = useState('');

  const checkSelection = (id: string): boolean => {
    return currentlySelectedPokemonId === id;
  }

  const handleSelect = () => {
    onSelectPokemon(currentlySelectedPokemonId);
  }

  return <Stack spacing={2}>
    <Stack spacing={5} direction="row">
      <PokemonSelection id={'1'} onSelectPokemon={setCurrentlySelectedPokemonId} checkSelection={checkSelection}/>
      <PokemonSelection id={'4'} onSelectPokemon={setCurrentlySelectedPokemonId} checkSelection={checkSelection}/>
      <PokemonSelection id={'7'} onSelectPokemon={setCurrentlySelectedPokemonId} checkSelection={checkSelection}/>
    </Stack>
    <Button onClick={handleSelect} disabled={!currentlySelectedPokemonId} variant="contained">Select</Button>
  </Stack>
}

const PokemonSelection = ({id, onSelectPokemon, checkSelection}: {id: string, onSelectPokemon: (id: string) => void, checkSelection: (id: string) => boolean}) => {

  return <Stack>
    {checkSelection(id) && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`pokemon with id ${id}`}/>}
    <PokeballButton handleClick={() => onSelectPokemon(id)}/>
  </Stack>
}

const PokeballButton = (props: {handleClick: ( event: React.MouseEvent<HTMLElement>) => void}) => {
  return <IconButton onClick={props.handleClick}>
    <span className="material-icons">catching_pokemon</span>
  </IconButton>
}
