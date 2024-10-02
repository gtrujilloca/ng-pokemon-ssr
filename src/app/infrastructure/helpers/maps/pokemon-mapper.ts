import { PokemonAPIResponse } from "@/core/models/pokemon/pokemon-api";
import { SimplePokemon } from "@/core/models/pokemon/simple-pokemon";

export function pokemonMapper(pokemonResponse: PokemonAPIResponse): SimplePokemon[] {
  return pokemonResponse.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2) ?? '',
    name: pokemon.name
  }));
}