import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierstoreComponent } from './supplierstore.component';

describe('SupplierstoreComponent', () => {
  let component: SupplierstoreComponent;
  let fixture: ComponentFixture<SupplierstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
