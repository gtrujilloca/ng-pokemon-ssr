import { map, Observable } from 'rxjs';
import { PokemonGateway } from '@/core/models/pokemon/gateway/pokemon-gateway';
import { PokemonAPIResponse, SinglePokemonApiResponse } from '@/core/models/pokemon/pokemon-api';
import { SimplePokemon } from '@/core/models/pokemon/simple-pokemon';
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@/../environments/environment';
import { pokemonMapper, simplePokemonMapper } from '../helpers/maps/pokemon-mapper';
import { SinglePokemon } from '@/core/models/pokemon/pokemon';

@Injectable()
export class PokemonService extends PokemonGateway {
  private _baseUrl = environment.baseUrl;
  private _http = inject(HttpClient);

  getPokemons(page: number = 0, limit: number = 12): Observable<SimplePokemon[]> {
    if (page !== 0) --page;

    page = Math.max(0, page);

    const params  = new HttpParams({ fromObject: { limit, offset: page * limit} });
    return this._http.get<PokemonAPIResponse>(`${this._baseUrl}/pokemon`, { params }).pipe(
      map(simplePokemonMapper)
    );
  }

  getPokemonById(id: number): Observable<SinglePokemon> {
    return this._http.get<SinglePokemonApiResponse>(`${this._baseUrl}/pokemon/${id}`).pipe(
      map(pokemonMapper)
    );
  }

}
