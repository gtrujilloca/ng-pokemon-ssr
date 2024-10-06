import { Observable } from "rxjs";
import { SimplePokemon } from "../simple-pokemon";
import { SinglePokemon } from "../pokemon";

export abstract class PokemonGateway {
  abstract getPokemons(page: number, limit: number): Observable<SimplePokemon[]>;
  abstract getPokemonById(id: number): Observable<SinglePokemon>;
}