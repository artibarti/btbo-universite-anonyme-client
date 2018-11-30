import { Course } from "../../../shared/models/course";
import { Injectable } from "@angular/core";
import { CourseService } from "../../../shared/services/course/course.service";

@Injectable({
    providedIn: 'root'
  })
export class CourseModuleService 
{
    course: Course;
    coursePulse: string[] = [];

    setCourse(id: string)
    {
        this.course = new Course;
        this.coursePulse = [];

        this.courseService.getCourseDetails(id);

        this.courseService.getCourseDetails(id).then(
            res => {        
                this.course.id = res["id"];
                this.course.name = res["name"];
                this.course.description = res["description"];
            });

        this.courseService.getCoursePulse(id).then(
            res => {        
                res.forEach(p => this.coursePulse.push(p));
                console.log(this.coursePulse);
                
            });
                
    }

    constructor(private courseService: CourseService)
    {
        this.course = new Course;
        
        this.course.id = "";
        this.course.name = "";
        this.course.description = "";
    }
}