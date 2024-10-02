import { Observable } from "rxjs";
import { SimplePokemon } from "../simple-pokemon";

export abstract class PokemonGateway {
  abstract getPokemons(offset: number, limit: number): Observable<SimplePokemon[]>;
}