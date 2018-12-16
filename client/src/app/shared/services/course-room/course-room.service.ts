import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from '../session/session.service';
import { Question } from '../../models/question';
import {CourseRoom} from '../../models/courseRoom';

@Injectable()
export class CourseRoomService
{

  constructor(private http: HttpClient, private sessionService : SessionService) {}

  createCourseRoom(name: string, courseID: string) {

    const url = this.sessionService.apiURL + '/courseroom/create';
    return this.http.post(url, {'courseID': courseID, 'name' : name} ,
      {headers: {'token' : this.sessionService.token}}).toPromise();
  }

}
