import {TestBed} from '@angular/core/testing';

import {FeatureService} from './feature.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Feature} from '../models/feature.model';
import {of} from 'rxjs';

describe('FeatureService', () => {

  const input: Feature[] = [];
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
    const service: FeatureService = TestBed.get(FeatureService);
    expect(service).toBeTruthy();
  });
});
