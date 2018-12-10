import { Course } from "../../../shared/models/course";
import { Injectable } from "@angular/core";
import { CourseService } from "../../../shared/services/course/course.service";
import { CoursePulse } from "../../../shared/models/coursePulse";
import { Observable } from "rxjs";
import { CourseSession } from "../../../shared/models/session";

@Injectable({
    providedIn: 'root'
  })
export class SharedObjects 
{

    course: Course;
    activeSession: CourseSession = null;

    setCourse(id: string)
    {
        this.course = new Course;
        this.course.id = id;

        this.courseService.getCourseDetails(id).then(
            res => {        
                this.course.name = res["name"];
                this.course.description = res["description"];
            });                

        this.courseService.getActiveSessionForCourse(id).then(
            res => {  
                if (res != null)
                {
                    this.activeSession = new CourseSession;
                    this.activeSession.name = res["name"];
                    this.activeSession.id = res["id"];    
                    this.activeSession.courseId = id;
                }
                else
                {
                    this.activeSession = null;
                }
            });                
    }

    constructor(private courseService: CourseService)
    {
        this.course = new Course;  
    }
}