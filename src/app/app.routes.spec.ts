import { TestBed } from "@angular/core/testing";
import { provideRouter, Router } from "@angular/router";
import { Location } from "@angular/common";
import { routes } from "./app.routes";

describe('AppRoutes', () => {
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
      ]
    })

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  test('should redirect to about page', async () => {
    await router.navigate(['/']);
    expect(location.path()).toBe('/about');
  })

  test('should redirect to about page', async () => {
    await router.navigate(['/pricing']);
    expect(location.path()).toBe('/pricing');
  })

  test('should redirect to contact page', async () => {
    await router.navigate(['/contact']);
    expect(location.path()).toBe('/contact');
  });

  test('should redirect to contact page', async () => {
    await router.navigate(['/pokemons/12']);
    expect(location.path()).toBe('/pokemons/12');
  });

  test('should render pokemon page component', async () => {
    const pokemonRoute = routes.find(route => route.path === 'pokemons/page/:page');
    expect(pokemonRoute).toBeDefined();

    const page = await pokemonRoute?.loadComponent!();
    expect(page).toBeTruthy();
  });
});