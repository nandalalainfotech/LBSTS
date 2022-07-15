import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiopopupComponent } from './audiopopup.component';

describe('AudiopopupComponent', () => {
  let component: AudiopopupComponent;
  let fixture: ComponentFixture<AudiopopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiopopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiopopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
