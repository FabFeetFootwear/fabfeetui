import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryretrieveComponent } from './categoryretrieve.component';

describe('CategoryretrieveComponent', () => {
  let component: CategoryretrieveComponent;
  let fixture: ComponentFixture<CategoryretrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryretrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryretrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
