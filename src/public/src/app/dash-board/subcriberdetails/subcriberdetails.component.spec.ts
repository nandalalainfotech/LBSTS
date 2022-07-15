import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriberdetailsComponent } from './subcriberdetails.component';

describe('SubcriberdetailsComponent', () => {
  let component: SubcriberdetailsComponent;
  let fixture: ComponentFixture<SubcriberdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcriberdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcriberdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
