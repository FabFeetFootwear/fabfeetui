import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceDescComponent } from './product-price-desc.component';

describe('ProductPriceDescComponent', () => {
  let component: ProductPriceDescComponent;
  let fixture: ComponentFixture<ProductPriceDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPriceDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
