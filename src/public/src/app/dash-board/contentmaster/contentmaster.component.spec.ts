import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentmasterComponent } from './contentmaster.component';

describe('ContentmasterComponent', () => {
  let component: ContentmasterComponent;
  let fixture: ComponentFixture<ContentmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
