import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverlayComponent } from './roverlay.component';

describe('RoverlayComponent', () => {
  let component: RoverlayComponent;
  let fixture: ComponentFixture<RoverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
