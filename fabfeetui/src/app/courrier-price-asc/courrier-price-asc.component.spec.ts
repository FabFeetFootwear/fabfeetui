import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierPriceAscComponent } from './courrier-price-asc.component';

describe('CourrierPriceAscComponent', () => {
  let component: CourrierPriceAscComponent;
  let fixture: ComponentFixture<CourrierPriceAscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrierPriceAscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierPriceAscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
