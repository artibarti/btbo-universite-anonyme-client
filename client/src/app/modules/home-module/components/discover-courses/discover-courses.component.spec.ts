import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCoursesComponent } from './discover-courses.component';

describe('DiscoverCoursesComponent', () => {
  let component: DiscoverCoursesComponent;
  let fixture: ComponentFixture<DiscoverCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
