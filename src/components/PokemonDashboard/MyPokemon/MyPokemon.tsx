import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { BasicPokemon } from "../../../types/BasicPokemon";

export default function MyPokemon({ pokemonId }: { pokemonId: string }) {
  const [pokemon, setPokemon] = useState<BasicPokemon>();

  const BASE_API = "/api/v1/my-pokemon";

  useEffect(() => {
    fetch(`${BASE_API}/${pokemonId}`)
      .then((response) => response.json())
      .then((data) =>
        setPokemon({
          img: data.img,
          name: data.name,
          level: data.level,
          moves: data.moves,
        })
      );
  }, []);

  if (!pokemon) {
    return <CircularProgress></CircularProgress>;
  }

  const handleLevelUp = () => {
    fetch(`${BASE_API}/${pokemonId}/set-level`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Level up Pokemon",
        level: pokemon.level + 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => setPokemon({ ...pokemon, level: data.level }));
  };

  return (
    <>
      <img src={pokemon.img} alt={`pokemon with id ${pokemon.name}`} />
      <List>
        <ListItem>
          <ListItemText>Name: {pokemon.name}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Experience: {pokemon.level}</ListItemText>
        </ListItem>
        {pokemon.moves
          .filter((move) => pokemon.level >= move.learnedAt)
          .map((move) => (
            <ListItem key={move.name}>
              <ListItemText>{move.name}</ListItemText>
            </ListItem>
          ))}
      </List>
      <Button onClick={handleLevelUp} variant="contained">
        Level up!
      </Button>
    </>
  );
}
