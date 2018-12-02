import { Component, OnInit } from '@angular/core';
import { SharedObjects } from '../../services/shared-objects.service';

@Component({
  selector: 'app-about-course',
  templateUrl: './about-course.component.html',
  styleUrls: ['./about-course.component.scss']
})
export class AboutCourseComponent implements OnInit {

  constructor(private sharedObjects: SharedObjects) { }

  ngOnInit() {}

}
