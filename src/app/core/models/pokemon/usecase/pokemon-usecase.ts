import { inject, Injectable } from "@angular/core";
import { PokemonGateway } from "../gateway/pokemon-gateway";
import { Observable } from "rxjs";
import { SimplePokemon } from "../simple-pokemon";
import { SinglePokemon } from "../pokemon";

@Injectable()
export class PokemonUsecase {
  pokemonGateway = inject(PokemonGateway);

  getPokemons(page: number = 0, limit: number = 12): Observable<SimplePokemon[]> {
    return this.pokemonGateway.getPokemons(page, limit);
  };

  getPokemonById(id: number): Observable<SinglePokemon> {
    return this.pokemonGateway.getPokemonById(id);
  };

}