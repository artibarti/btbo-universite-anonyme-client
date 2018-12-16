import { Component, OnInit } from '@angular/core';
import {CourseRoomService} from '../../../../shared/services/course-room/course-room.service';
import {SharedObjects} from '../../../course-module/services/shared-objects.service';

@Component({
  selector: 'app-create-course-room',
  templateUrl: './create-course-room.component.html',
  styleUrls: ['./create-course-room.component.scss']
})
export class CreateCourseRoomComponent implements OnInit {

  name = '';

  constructor(private courseRoomService: CourseRoomService,
      private sharedObjects: SharedObjects) {}

  ngOnInit() {}

  onCreateClicked()
  {
    this.courseRoomService.createCourseRoom(this.sharedObjects.course.id, this.name).then(
      res => {
        if (res !== null) {}
      }
    );
  }
}
