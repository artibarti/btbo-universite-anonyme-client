import { Component, OnInit } from '@angular/core';
import { CourseModuleService } from '../../services/course-module.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {

  constructor(private courseModuleService: CourseModuleService) {}

  ngOnInit() {
  }

}
