import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvseriesCardComponent } from './tvseries-card.component';

describe('TvseriesCardComponent', () => {
  let component: TvseriesCardComponent;
  let fixture: ComponentFixture<TvseriesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvseriesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvseriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
