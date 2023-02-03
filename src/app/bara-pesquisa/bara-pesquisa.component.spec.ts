import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaraPesquisaComponent } from './bara-pesquisa.component';

describe('BaraPesquisaComponent', () => {
  let component: BaraPesquisaComponent;
  let fixture: ComponentFixture<BaraPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaraPesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaraPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
