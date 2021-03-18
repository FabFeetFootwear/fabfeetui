import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorydeleteComponent } from './categorydelete.component';

describe('CategorydeleteComponent', () => {
  let component: CategorydeleteComponent;
  let fixture: ComponentFixture<CategorydeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorydeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorydeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
