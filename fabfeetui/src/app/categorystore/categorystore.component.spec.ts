import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorystoreComponent } from './categorystore.component';

describe('CategorystoreComponent', () => {
  let component: CategorystoreComponent;
  let fixture: ComponentFixture<CategorystoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorystoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
