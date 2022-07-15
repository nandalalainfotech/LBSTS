import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatclassificationComponent } from './subcatclassification.component';

describe('SubcatclassificationComponent', () => {
  let component: SubcatclassificationComponent;
  let fixture: ComponentFixture<SubcatclassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcatclassificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatclassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
