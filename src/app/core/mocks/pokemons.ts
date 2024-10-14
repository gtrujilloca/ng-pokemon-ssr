import { SimplePokemon } from "../models/pokemon/simple-pokemon";
const pokemons = [
  {
    id: "1",
    name: "Bulbasaur",
  },
  {
    id: "2",
    name: "Ivysaur",
  },
  {
    id: "3",
    name: "Venusaur",
  },
  {
    id: "4",
    name: "Charmander",
  },
  {
    id: "5",
    name: "Charmeleon",
  },
  {
    id: "6",
    name: "Charizard",
  },
  {
    id: "7",
    name: "Squirtle",
  },
  {
    id: "8",
    name: "Wartortle",
  },
  {
    id: "9",
    name: "Blastoise",
  }
];

export function getPokemons(): SimplePokemon[] {
  return structuredClone(pokemons);
}

export function getSinplePokemon(): SimplePokemon {
  const idx = Math.round(Math.random() * (pokemons.length - 1));
  return structuredClone(pokemons[idx]);
}