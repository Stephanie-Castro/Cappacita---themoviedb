import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedTvseriesComponent } from './top-rated-tvseries.component';

describe('TopRatedTvseriesComponent', () => {
  let component: TopRatedTvseriesComponent;
  let fixture: ComponentFixture<TopRatedTvseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedTvseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedTvseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
