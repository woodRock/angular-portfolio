import { Component, OnInit } from '@angular/core';
import { ProjectButtonComponent } from '../project-button/project-button.component';

@Component({
  selector: 'app-project-box-item',
  templateUrl: './project-box-item.component.html',
  styleUrls: ['./project-box-item.component.css']
})
export class ProjectBoxItemComponent implements OnInit {

  constructor(public title: string, public description: string, public image: string, public button: ProjectButtonComponent) { 
    
  }

  ngOnInit() {
  }

}
