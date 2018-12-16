import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Question } from '../../../../shared/models/question';
import { ActivatedRoute } from '@angular/router';
import { CourseSessionService } from '../../../../shared/services/course-session/course-session.service';


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }

    searchText = searchText.toLowerCase();
    return items.filter( it => {
        return it.message.toLowerCase().includes(searchText);
      });
   }
}

@Component({
  selector: 'app-active-session',
  templateUrl: './active-session.component.html',
  styleUrls: ['./active-session.component.scss']
})
export class ActiveSessionComponent implements OnInit {

  questions: Question[] = [];
  sessionID: string;
  myQuestion = '';
  questionsFilter: string;

  constructor(private route: ActivatedRoute,
    private courseSessionService: CourseSessionService) { }

  ngOnInit() {
    this.questions = [];
    this.myQuestion = '';

    this.route.params.subscribe(params => {
      this.sessionID = params['id'];
    });

    this.courseSessionService.getQuestionsForActiveSessions(this.sessionID).then(
      res => {
        res.forEach(p => this.questions.push(p));

        console.log('questions: ' + this.questions.length);
      }
    );
  }

  onPostClicked() {
    this.courseSessionService.postQuestion(this.myQuestion, this.sessionID).then(
      res => {
        this.ngOnInit();
      });
  }

  stringifyQuestion(question: Question) {
    return JSON.stringify(question);
  }
}
