import { TestBed } from "@angular/core/testing";
import { PokemonService } from "./pokemon.service";
import { provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";

describe('Pokemon service', () => {
  let service: PokemonService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        PokemonService,
      ]
    });

    httpController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokemonService);
  })

  test('should be created', () => {
    expect(service).toBeTruthy();
  });




})