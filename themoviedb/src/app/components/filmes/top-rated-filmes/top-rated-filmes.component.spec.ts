import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedFilmesComponent } from './top-rated-filmes.component';

describe('TopRatedFilmesComponent', () => {
  let component: TopRatedFilmesComponent;
  let fixture: ComponentFixture<TopRatedFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
