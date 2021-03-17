import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPriceAscComponent } from './orders-price-asc.component';

describe('OrdersPriceAscComponent', () => {
  let component: OrdersPriceAscComponent;
  let fixture: ComponentFixture<OrdersPriceAscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersPriceAscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPriceAscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
