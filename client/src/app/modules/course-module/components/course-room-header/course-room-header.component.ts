import { Component, OnInit } from '@angular/core';
import { CourseModuleService } from '../../services/course-module.service';

@Component({
  selector: 'app-course-room-header',
  templateUrl: './course-room-header.component.html',
  styleUrls: ['./course-room-header.component.scss']
})
export class CourseRoomHeaderComponent implements OnInit {

  constructor(private courseModuleService: CourseModuleService) {}

  ngOnInit() {}

}
