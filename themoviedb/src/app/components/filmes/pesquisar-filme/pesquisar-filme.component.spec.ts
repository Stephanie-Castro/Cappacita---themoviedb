import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarFilmeComponent } from './pesquisar-filme.component';

describe('PesquisarFilmeComponent', () => {
  let component: PesquisarFilmeComponent;
  let fixture: ComponentFixture<PesquisarFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
