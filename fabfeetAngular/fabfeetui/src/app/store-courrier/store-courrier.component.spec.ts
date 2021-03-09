import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCourrierComponent } from './store-courrier.component';

describe('StoreCourrierComponent', () => {
  let component: StoreCourrierComponent;
  let fixture: ComponentFixture<StoreCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
