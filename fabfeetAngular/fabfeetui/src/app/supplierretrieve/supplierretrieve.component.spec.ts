import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierretrieveComponent } from './supplierretrieve.component';

describe('SupplierretrieveComponent', () => {
  let component: SupplierretrieveComponent;
  let fixture: ComponentFixture<SupplierretrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierretrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierretrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
