export class Course {
    
    id: string;
    name: string;
    description: string;
    private: boolean;

    constructor() 
    { 
        this.id = ""; 
        this.name = "";
        this.description = "";
        this.private = false;
    }
}