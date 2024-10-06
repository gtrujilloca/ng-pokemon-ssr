import { SinglePokemon } from "@/core/models/pokemon/pokemon";
import { PokemonAPIResponse, SinglePokemonApiResponse } from "@/core/models/pokemon/pokemon-api";
import { SimplePokemon } from "@/core/models/pokemon/simple-pokemon";

export function simplePokemonMapper(pokemonResponse: PokemonAPIResponse): SimplePokemon[] {
  return pokemonResponse.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2) ?? '',
    name: pokemon.name
  }));
}

export function pokemonMapper(pokemonResponse: SinglePokemonApiResponse): SinglePokemon {
  const {
    abilities,
    base_experience,
    height,
    id,
    name,
    order,
    past_abilities,
    past_types,
    stats,
    types,
    weight,
    cries,
    sprites,
  } = pokemonResponse;

  return {
    abilities,
    base_experience,
    height,
    id,
    name,
    order,
    past_abilities,
    past_types,
    stats,
    types,
    weight,
    cries,
    sprites,
  };
}