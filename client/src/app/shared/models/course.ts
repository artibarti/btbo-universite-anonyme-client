export class Course {

    id: string;
    name: string;
    description: string;
    hidden: boolean;
    subNumber: string;
    rating: string;

    constructor() {
        this.id = '';
        this.name = '';
        this.description = '';
        this.hidden = false;
        this.subNumber = '';
        this.rating = '';
    }
}
