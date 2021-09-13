import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFilmesPageComponent } from './main-filmes-page.component';

describe('MainFilmesPageComponent', () => {
  let component: MainFilmesPageComponent;
  let fixture: ComponentFixture<MainFilmesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFilmesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFilmesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
