import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {Project} from '../../models/project.model';
import {Subscription} from 'rxjs';
import {CrudService} from '../../services/crud.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private static COLLECTION = 'projects';
  private _projects: Project[];
  private subscription: Subscription;

  constructor(private service: CrudService<Project>) {}

  ngOnInit() {
    this.service.setName(ProjectsComponent.COLLECTION);
    this.subscription = this.service.list().subscribe(projects => {
      this._projects = projects;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getFolderName(str): string {
    return str.toLowerCase().split(' ').join('-');
  }

  get projects(): Project[] {
    return this._projects;
  }
}
