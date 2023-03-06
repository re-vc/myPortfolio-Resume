import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniverticalbannerComponent } from './aniverticalbanner.component';

describe('AniverticalbannerComponent', () => {
  let component: AniverticalbannerComponent;
  let fixture: ComponentFixture<AniverticalbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniverticalbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniverticalbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
