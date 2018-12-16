import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-room-root',
  templateUrl: './course-room.component.html',
  styleUrls: ['./course-room.component.scss']
})
export class CourseRoomComponent
{
  constructor(private router: Router) {}

  ngOnInit() {}
}
