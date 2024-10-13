import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, provideRouter, RouterLink, RouterModule } from "@angular/router";
import { PokemonCardComponent } from "./pokemon-card.component";
import { routes } from "@/app.routes";
import { getSinplePokemon } from "@/core/mocks/pokemons";
import { SimplePokemon } from "@/core/models/pokemon/simple-pokemon";
import { environment } from "@/../environments/environment";
import { By } from "@angular/platform-browser";

describe('PokemonCardComponent', () => {
  let fixture: ComponentFixture<PokemonCardComponent>;
  let component: PokemonCardComponent;
  let pokemon: SimplePokemon = getSinplePokemon();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonCardComponent],
      providers: [ provideRouter(routes) ],
    });

    fixture = TestBed.createComponent(PokemonCardComponent);
    fixture.componentRef.setInput('pokemon', pokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have a simple pokemon', () => {
    expect(component.pokemon()).toBeDefined();
    expect(component.pokemon()).toEqual(pokemon);
  });

  test('should have a pokemon name and image url', () => {
    const baseImageUrl = environment.baseImageUrl;
    const imgUrl = `${baseImageUrl}/${pokemon.id}.png`;
    const img = fixture.debugElement.query(By.css("img")).nativeElement as HTMLImageElement;
    const h2 = fixture.debugElement.query(By.css("h2")).nativeElement as HTMLHeadingElement;
    expect(component.pokemonImageUrl()).toBeDefined();
    expect(img.src).toEqual(imgUrl);
    expect(h2.textContent).toEqual(pokemon.name);
  });

  test('should have a proper ng-reflect-router-link', () => {
    const picture = fixture.debugElement.query(By.css("picture")).nativeElement as HTMLPictureElement;
    expect(picture?.attributes.getNamedItem('ng-reflect-router-link')?.value).toEqual(`/pokemons,${pokemon.id}`);
  });
});