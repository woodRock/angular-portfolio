import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/project.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private _projects: Project[];
  private subscription: Subscription;

  constructor(private service: ProjectService) { }

  ngOnInit() {
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
