import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { CardSkeletonComponent } from "../card-skeleton/card-skeleton.component";
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { SimplePokemon } from '@/core/models/pokemon/simple-pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    PokemonCardComponent,
    CardSkeletonComponent
],
  templateUrl: './pokemon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  pokemons = input.required<SimplePokemon[]>();
  isLoading = input(true, { transform: booleanAttribute });

  ngOnInit(): void {

  }

}
