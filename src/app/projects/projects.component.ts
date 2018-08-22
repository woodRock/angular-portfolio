import { Component, OnInit } from '@angular/core';
import { ProjectItem } from '../ProjectItem';
import { PROJECTS } from '../mock-projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = PROJECTS;
  selectedProject : ProjectItem;

  onSelect(p: ProjectItem): void {
    this.selectedProject = p;
  }

  constructor() { }

  ngOnInit() {
  }

}
