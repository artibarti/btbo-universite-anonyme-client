import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { CourseSessionService } from '../../services/session/session.service';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform 
{
  transform(items: any[], searchText: string): any[] 
  {
    if(!items) return [];
    if(!searchText) return items;
  
    searchText = searchText.toLowerCase();
    return items.filter( it => 
      {
        return it.name.toLowerCase().includes(searchText);
      });
   }
}

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  mySessionFilter: string;
  sessions: Array<any>

  constructor(private courseSessionService: CourseSessionService) { }

  ngOnInit() 
  {
    this.courseSessionService.getAllSessionsForCourse("101")
    .subscribe(data => {
      this.sessions = data;});
  }

}
