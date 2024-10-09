import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: '<span>Navbar</span>'
})
class NavbarComponentMock {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
      ],
      providers: [
        provideRouter([])
      ],
    })
    .overrideComponent(AppComponent,{
      add: {
        imports: [NavbarComponentMock]
      },
      remove: {
        imports: [NavbarComponent]
      }
    })
    .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  test('should create the app', () => {
    expect(app).toBeTruthy();
  });

  test('should have a router-outlet and app-navbar', () => {
    const compiled = fixture.debugElement;

    expect(compiled.query(By.css('router-outlet'))).toBeTruthy();
    expect(compiled.query(By.css('app-navbar'))).toBeTruthy();
  });

});
