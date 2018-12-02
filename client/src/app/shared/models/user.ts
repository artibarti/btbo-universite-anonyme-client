export class User {
    
    id: string;
    token: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    email: string;

    constructor() 
    { 
        this.id = ""; 
        this.token = "";
        this.firstName = ""; 
        this.lastName = "";
        this.userName = "";
        this.email = "";
    }
}