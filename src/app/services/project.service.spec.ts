import {TestBed} from '@angular/core/testing';

import {ProjectService} from './project.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Project} from '../models/project.model';
import {of} from 'rxjs';

describe('ProjectService', () => {

  const input: Project[] = [];
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
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });
});
