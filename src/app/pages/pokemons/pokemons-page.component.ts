import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal, effect } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import { getPokemons } from '@/core/mocks/pokemons';
import { PokemonService } from '@/infrastructure/driven-adapters/pokemon.service';
import { PokemonGateway } from '@/core/models/pokemon/gateway/pokemon-gateway';
import { PokemonUsecase } from '@/core/models/pokemon/usecase/pokemon-usecase';
import { Router, RouterLink } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-pokemons-page',
  styles: `
    .disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  `,
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    PokemonListComponent
  ],
  providers: [
    PokemonUsecase,
    {
      provide: PokemonGateway,
      useClass: PokemonService
    },
  ],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  private readonly _title = 'pokemons';
  private readonly seoTitle = inject(Title);
  private readonly metaData = inject(Meta);

  private _pokemonSrv = inject(PokemonUsecase);

  page = input(1, {
    transform: (value: number) => {
      const pageValue = isNaN(+value) ? 1 : +value;
      return Math.max(1, pageValue);
    },
  });

  isLoading = signal(false);
  pokemons = signal(getPokemons());
  router = inject(Router);

  pokemonLoader = effect(() => {
    this.loadPOkemons(this.page());
  }, { allowSignalWrites: true });



  ngOnInit(): void {
    this.seoTitle.setTitle(this._title);
    this.metaData.updateTag({ name: 'description', content: `${this._title} page` });
    this.metaData.updateTag({ name: 'og:title', content: `This is ${this._title} page pokemon` });
    this.metaData.updateTag({ name: 'keyboards', content: `Pokemon, pricing, pokemon-ssr` });
  }

  loadPOkemons(page: number = 0): void {
    this.isLoading.set(true);
    this._pokemonSrv.getPokemons(page)
      .pipe(
        tap(() => {
          this.seoTitle.setTitle(`Pokémons SSR - Page ${this.page()}`)
          this.isLoading.set(false);
        }),
      )
      .subscribe(pokemons => {
        this.pokemons.set(pokemons);
      });
  }

}
