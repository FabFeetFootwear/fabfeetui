import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierPriceDescComponent } from './courrier-price-desc.component';

describe('CourrierPriceDescComponent', () => {
  let component: CourrierPriceDescComponent;
  let fixture: ComponentFixture<CourrierPriceDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrierPriceDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierPriceDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
