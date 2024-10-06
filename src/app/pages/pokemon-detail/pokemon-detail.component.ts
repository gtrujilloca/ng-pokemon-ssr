import { SinglePokemon } from '@/core/models/pokemon/pokemon';
import { PokemonUsecase } from '@/core/models/pokemon/usecase/pokemon-usecase';
import { PokemonService } from '@/infrastructure/driven-adapters/pokemon.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { tap } from 'rxjs';
import { environment } from '@/../environments/environment';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  providers: [
    PokemonUsecase,
    {
      provide: PokemonUsecase,
      useClass: PokemonService,
    }
  ],
  templateUrl: './pokemon-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonDetailComponent {
  id = input<string>('');
  title = inject(Title);
  metaData = inject(Meta);
  pokemon = signal<SinglePokemon | null>(null);
  private readonly baseImageUrl = environment.baseImageUrl;

  pokemonSrv = inject(PokemonUsecase);

  ngOnInit(): void {
    console.log(this.id());
    this.getPOkemon();
  }

  assignSeoData(pokemon: SinglePokemon) {
    const { id, name } = pokemon;
    const title = ` ${id} ${name} pokémon`;
    const description = `${id} ${name} pokémon page`;

    this.title.setTitle(title);
    this.metaData.updateTag({ name: 'og:title', content: title });
    this.metaData.updateTag({ name: 'description', content: description });
    this.metaData.updateTag({ name: 'og:description', content: description });
    this.metaData.updateTag({ name: 'og:image', content: `${this.baseImageUrl}/${id}.png` });

  }

  getPOkemon() {
    this.pokemonSrv.getPokemonById(+this.id())
      .pipe(tap( pokemon => {
        this.assignSeoData(pokemon);
      }))
      .subscribe(this.pokemon.set);
  }

}
