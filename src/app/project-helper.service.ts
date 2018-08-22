import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProjectItem } from './ProjectItem';
import { PROJECTS } from './mock-projects';

@Injectable({
  providedIn: 'root'
})

export class ProjectHelperService {
 
  constructor() { }

  getProjects(): Observable<ProjectItem[]> {
    return of(PROJECTS);
  }
}