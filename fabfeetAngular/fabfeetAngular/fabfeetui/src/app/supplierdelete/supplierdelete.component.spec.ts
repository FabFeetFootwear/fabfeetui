import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierdeleteComponent } from './supplierdelete.component';

describe('SupplierdeleteComponent', () => {
  let component: SupplierdeleteComponent;
  let fixture: ComponentFixture<SupplierdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
