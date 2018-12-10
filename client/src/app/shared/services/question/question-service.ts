import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { SessionService } from '../session/session.service';
import { Observer } from 'rxjs';
import { Comment as QuestionComment} from '../../models/comment'

@Injectable()
export class QuestionService 
{

    constructor(private http: HttpClient, private sessionService : SessionService) {}

    getCommentsForQuestion(id: string) : Promise<Observable<QuestionComment>>
    {
        var url = this.sessionService.apiURL +
            "/questions/" + id + "/comments";
     
        return this.http.get<any>(url, 
            {headers : {"token" : this.sessionService.token}}).toPromise();
    }

    addCommentForQuestion(id: string, comment: string)
    {
        var url = this.sessionService.apiURL +
            "/questions/" + id + "/comments/add";
     
        var name = "";

        return this.http.post<any>(url, {"message" : comment, "anon" : this.sessionService.anonym},
            {headers : {"token" : this.sessionService.token}}).toPromise();
    }
}
