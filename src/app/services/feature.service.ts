import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Feature} from '../models/feature.model';
import {CrudService} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureService extends CrudService<Feature> {

  constructor(
    private _afs: AngularFirestore
  ) {
    super(_afs, 'features');
  }
}
