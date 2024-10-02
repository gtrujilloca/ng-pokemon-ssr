import { inject, Injectable } from "@angular/core";
import { PokemonGateway } from "../gateway/pokemon-gateway";
import { Observable } from "rxjs";
import { SimplePokemon } from "../simple-pokemon";

@Injectable()
export class PokemonUsecase {
  pokemonGateway = inject(PokemonGateway);

  getPokemons(offset: number = 0, limit: number = 20): Observable<SimplePokemon[]> {
    return this.pokemonGateway.getPokemons(offset, limit);
  };

}