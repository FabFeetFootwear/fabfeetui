import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveCourrierComponent } from './retrieve-courrier.component';

describe('RetrieveCourrierComponent', () => {
  let component: RetrieveCourrierComponent;
  let fixture: ComponentFixture<RetrieveCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveCourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
