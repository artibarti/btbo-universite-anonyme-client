import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from '../session/session.service';
import { Question } from '../../models/question';
import {CourseRoom} from '../../models/courseRoom';
import {Comment as QuestionComment} from '../../models/comment';
import {CourseRoomComment} from '../../models/courseRoomComment';

@Injectable()
export class CourseRoomService {

  constructor(private http: HttpClient, private sessionService: SessionService) {}

  createCourseRoom(courseID: string, name: string) {

    const url = this.sessionService.apiURL + '/courses/' + courseID + '/courserooms/add';
    return this.http.post(url, name, {headers: {'token' : this.sessionService.token}}).toPromise();
  }

  getCommentsForCourseRoom(id: string): Promise<Observable<CourseRoomComment>> {
    const url = this.sessionService.apiURL + '/courserooms/' + id + '/comments';
    return this.http.get<any>(url, {headers: {'token' : this.sessionService.token}}).toPromise();
  }

  addCommentForCourseRoom(id: string, message: string) {

    const url = this.sessionService.apiURL + '/courserooms/' + id + '/comments/add';
    return this.http.post(url, {'message' : message,
      'anon' : this.sessionService.anonym, 'refID' : null},
      {headers: {'token' : this.sessionService.token}}).toPromise();
  }
}
