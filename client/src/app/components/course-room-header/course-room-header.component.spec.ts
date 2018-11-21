import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRoomHeaderComponent } from './course-room-header.component';

describe('CourseRoomHeaderComponent', () => {
  let component: CourseRoomHeaderComponent;
  let fixture: ComponentFixture<CourseRoomHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRoomHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRoomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
