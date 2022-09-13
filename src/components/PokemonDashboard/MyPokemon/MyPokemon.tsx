import React from "react";
import {List, ListItem, ListItemText} from "@mui/material";

export default function MyPokemon({pokemonId} : {pokemonId: string}){

  return <>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={`pokemon with id ${pokemonId}`}/>
    <List>
      <ListItem>
        <ListItemText>Name: Glumanda</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Level: 5</ListItemText>
      </ListItem>
    </List>
  </>
}
