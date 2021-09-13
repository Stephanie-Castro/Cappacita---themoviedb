import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTvseriesPageComponent } from './main-tvseries-page.component';

describe('MainTvseriesPageComponent', () => {
  let component: MainTvseriesPageComponent;
  let fixture: ComponentFixture<MainTvseriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTvseriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTvseriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
