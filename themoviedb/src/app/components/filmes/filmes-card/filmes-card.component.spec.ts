import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesCardComponent } from './filmes-card.component';

describe('FilmesCardComponent', () => {
  let component: FilmesCardComponent;
  let fixture: ComponentFixture<FilmesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
