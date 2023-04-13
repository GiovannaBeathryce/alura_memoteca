import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtWallComponent } from './thought-wall.component';

describe('ThoughtWallComponent', () => {
  let component: ThoughtWallComponent;
  let fixture: ComponentFixture<ThoughtWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoughtWallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoughtWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
