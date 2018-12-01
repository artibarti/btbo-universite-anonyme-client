import { Component, OnInit } from '@angular/core';
import { SharedObjects } from '../../services/shared-objects.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {

  constructor(sharedObjects: SharedObjects) {}

  ngOnInit() {
  }

}
