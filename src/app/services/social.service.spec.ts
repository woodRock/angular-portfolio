import {TestBed} from '@angular/core/testing';

import {SocialService} from './social.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Social} from '../models/social.model';
import {of} from 'rxjs';

describe('SocialService', () => {

  const input: Social[] = [];
  const data = of(input);
  const collectionSnub = {
    snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(data)
  };
  const angularFireSnub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionSnub)
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: angularFireSnub }
    ]
  }));

  it('should be created', () => {
    const service: SocialService = TestBed.get(SocialService);
    expect(service).toBeTruthy();
  });
});
