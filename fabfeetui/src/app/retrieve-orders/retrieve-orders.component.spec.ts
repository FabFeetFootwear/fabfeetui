import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveOrdersComponent } from './retrieve-orders.component';

describe('RetrieveOrdersComponent', () => {
  let component: RetrieveOrdersComponent;
  let fixture: ComponentFixture<RetrieveOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
