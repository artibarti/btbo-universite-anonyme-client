import { Component, OnInit } from '@angular/core';
import { CourseModuleService } from '../../services/course-module.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-course-header',
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.scss']
})
export class CourseHeaderComponent implements OnInit {

  constructor(private courseModuleService: CourseModuleService) {}

  ngOnInit() 
  {
    // this.initChart();
  }

  chart: Chart;

  initChart()
  {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
          { 
            data: this.courseModuleService.coursePulse,
            borderColor: "#3cba9f",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });  
  }

}
