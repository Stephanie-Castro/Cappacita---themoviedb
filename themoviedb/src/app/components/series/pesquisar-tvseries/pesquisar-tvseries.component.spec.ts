import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarTvseriesComponent } from './pesquisar-tvseries.component';

describe('PesquisarTvseriesComponent', () => {
  let component: PesquisarTvseriesComponent;
  let fixture: ComponentFixture<PesquisarTvseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarTvseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarTvseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
