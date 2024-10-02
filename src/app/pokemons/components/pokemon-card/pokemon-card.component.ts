import { SimplePokemon } from '@/core/models/pokemon/simple-pokemon';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { environment } from '@/../environments/environment';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  private readonly baseImageUrl = environment.baseImageUrl;
  pokemon = input.required<SimplePokemon>();
  pokemonImageUrl = computed(() => `${this.baseImageUrl}/${this.pokemon().id}.png`);
}
