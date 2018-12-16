import { Component, OnInit } from '@angular/core';
import {CourseRoomService} from '../../../../shared/services/course-room/course-room.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-course-room',
  templateUrl: './create-course-room.component.html',
  styleUrls: ['./create-course-room.component.scss']
})
export class CreateCourseRoomComponent implements OnInit {

  name = '';
  courseID = '';

  constructor(private courseRoomService: CourseRoomService, private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseID = params['id'];
    });
  }

  onCreateClicked() {
    this.courseRoomService.createCourseRoom(this.courseID, this.name).then(
      res => {
        this.router.navigate(['/course', this.courseID]);
      }
    );
  }
}
