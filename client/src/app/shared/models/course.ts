export class Course {
    
    id: string;
    name: string;
    description: string;
    hidden: boolean;

    constructor() 
    { 
        this.id = ""; 
        this.name = "";
        this.description = "";
        this.hidden = false;
    }
}