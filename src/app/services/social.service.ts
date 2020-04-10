import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Social} from '../models/social.model';
import {CrudService} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class SocialService extends CrudService<Social> {

  constructor(
    private _afs: AngularFirestore
  ) {
    super(_afs, 'social');
  }
}
