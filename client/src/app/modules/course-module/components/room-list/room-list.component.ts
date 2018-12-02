import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CourseRoom } from '../../../../shared/models/courseRoom';
import { CourseService } from '../../../../shared/services/course/course.service';
import { SharedObjects } from '../../services/shared-objects.service';

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
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  rooms: CourseRoom[] = [];

  mySessionFilter: string;

  constructor(private courseService: CourseService, 
    private sharedObjects: SharedObjects) {}

  ngOnInit() 
  {
    this.courseService.getCourseRoomsForCourse(this.sharedObjects.course.id).then(
      res => {        
        res.forEach(p => this.rooms.push(p));
      });
  }


}