import { PokemonGateway } from '@/core/models/pokemon/gateway/pokemon-gateway';
import { PokemonAPIResponse } from '@/core/models/pokemon/pokemon-api';
import { SimplePokemon } from '@/core/models/pokemon/simple-pokemon';
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pokemonMapper } from '../helpers/maps/pokemon-mapper';

@Injectable()
export class PokemonService extends PokemonGateway {
  private _baseUrl = environment.baseUrl;
  private _http = inject(HttpClient);

  getPokemons(offset: number = 0, limit: number = 20): Observable<SimplePokemon[]> {
    const params  = new HttpParams({ fromObject: { limit, offset } });
    return this._http.get<PokemonAPIResponse>(`${this._baseUrl}/pokemon`, { params }).pipe(
      map(pokemons => pokemonMapper(pokemons))
    );
  }

}
