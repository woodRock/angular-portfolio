import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Project} from '../models/project.model';
import {CrudService} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends CrudService<Project> {

  constructor(
    private _afs: AngularFirestore
  ) {
    super(_afs, 'projects');
  }
}
