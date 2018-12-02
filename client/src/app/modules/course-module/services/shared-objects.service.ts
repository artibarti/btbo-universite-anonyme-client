import { Course } from "../../../shared/models/course";
import { Injectable } from "@angular/core";
import { CourseService } from "../../../shared/services/course/course.service";
import { CoursePulse } from "../../../shared/models/coursePulse";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class SharedObjects 
{

    course: Course;

    setCourse(id: string)
    {
        this.course = new Course;
        this.course.id = id;

        this.courseService.getCourseDetails(id).then(
            res => {        
                this.course.name = res["name"];
                this.course.description = res["description"];
            });                
    }

    constructor(private courseService: CourseService)
    {
        this.course = new Course;        
    }
}