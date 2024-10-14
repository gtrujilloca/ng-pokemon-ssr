import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { PokemonListComponent } from "./pokemon-list.component";
import { CommonModule } from "@angular/common";
import { CardSkeletonComponent } from "../card-skeleton/card-skeleton.component";
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { SimplePokemon } from "@/core/models/pokemon/simple-pokemon";
import { getPokemons } from "@/core/mocks/pokemons";
import { By } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
const pokemons: SimplePokemon[] = getPokemons();
const fakeData = Array.from({ length: 3 }, (_, i) => ({ id: i}));

describe('PokemonListComponent', () => {
  let fixture: ComponentFixture<PokemonListComponent>;
  let component: PokemonListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        PokemonCardComponent,
        CardSkeletonComponent
      ],
      providers: [ provideRouter([]) ],
    });

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
  })


  test('should create', () => {
    fixture.componentRef.setInput('pokemons', pokemons);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  test('should be render pokemon list', () => {
    fixture.componentRef.setInput('pokemons', fakeData);
    fixture.detectChanges();
    const cardSkeletons = fixture.debugElement.queryAll(By.css("app-card-skeleton"));
    expect(cardSkeletons.length).toBe(3);

    fixture.componentRef.setInput('pokemons', pokemons);
    fixture.componentRef.setInput('isLoading', false);
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css("app-pokemon-card"));
    expect(cards.length).toBe(9);

  })
});