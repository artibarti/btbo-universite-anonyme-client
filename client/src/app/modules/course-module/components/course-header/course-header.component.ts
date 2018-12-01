import { Component, OnInit } from '@angular/core';
import { CoursePulse } from '../../../../shared/models/coursePulse';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../../shared/services/course/course.service';
import { SharedObjects } from '../../services/shared-objects.service';

@Component({
  selector: 'app-course-header',
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.scss']
})
export class CourseHeaderComponent implements OnInit {

  constructor(private courseService: CourseService, private route: ActivatedRoute,
    private sharedObjects: SharedObjects) {}

  id: string;

  // chart stuff
  coursePulse: Array<CoursePulse> = [];
  
  public chartType: string;
  public chartDatasets: Array<any>;

  public chartLabels: Array<String>;
  public chartColors: Array<any>;
  public chartOptions:any;

  ngOnInit() 
  {
    this.initChart();
  }

  initChart()
  {    
    this.courseService.getCoursePulse(this.sharedObjects.course.id).then(
        res => {
            res.forEach(p => this.coursePulse.push(p));
            console.log(this.coursePulse);            

            this.chartType = 'line';    

            this.chartDatasets = [
                {data: this.coursePulse.map(p => p.commentPulse) , label: 'Comments'},
                {data: this.coursePulse.map(p => p.questionPulse) , label: 'Question'},
            ];
              
            this.chartLabels = this.coursePulse.map(p => p.day);
          
            this.chartColors = [
                {
                    backgroundColor: 'rgba(220,220,220,0.2)',
                    borderColor: 'rgba(220,220,220,1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(220,220,220,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(220,220,220,1)'
                },
                {
                    backgroundColor: 'rgba(151,187,205,0.2)',
                    borderColor: 'rgba(151,187,205,1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(151,187,205,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(151,187,205,1)'
                }
            ];
          
            this.chartOptions = {
                responsive: true
            };
                    
        });      
  }

}
