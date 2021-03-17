import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveCustomerComponent } from './retrieve-customer.component';

describe('RetrieveCustomerComponent', () => {
  let component: RetrieveCustomerComponent;
  let fixture: ComponentFixture<RetrieveCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
