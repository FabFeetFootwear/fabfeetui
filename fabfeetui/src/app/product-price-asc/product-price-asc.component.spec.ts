import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceAscComponent } from './product-price-asc.component';

describe('ProductPriceAscComponent', () => {
  let component: ProductPriceAscComponent;
  let fixture: ComponentFixture<ProductPriceAscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPriceAscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceAscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
