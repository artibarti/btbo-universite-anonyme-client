export class CourseSession {
    
    id: string;
    name: string;
    courseId: string
    active: boolean;

    constructor() 
    { 
        this.id = ""; 
        this.name = "";
        this.courseId = "";
        this.active = false;
    }
}