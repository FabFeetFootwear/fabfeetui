import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPriceDescComponent } from './orders-price-desc.component';

describe('OrdersPriceDescComponent', () => {
  let component: OrdersPriceDescComponent;
  let fixture: ComponentFixture<OrdersPriceDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersPriceDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPriceDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
