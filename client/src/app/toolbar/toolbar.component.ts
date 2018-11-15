import { Component, OnInit } from '@angular/core';
import { ImagePoolService } from '../shared/image-pool/image-pool.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title = 'universite anonyme';
  
  constructor(private imagePoolService: ImagePoolService) { }

  ngOnInit() {
  }

}
