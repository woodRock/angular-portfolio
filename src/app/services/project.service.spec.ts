import {TestBed} from '@angular/core/testing';

import {ProjectService} from './project.service';
import {AngularFirestore} from "@angular/fire/firestore";
import {Project} from "../models/project.model";
import {of} from "rxjs";

describe('ProjectService', () => {

  let input: Project[] = [];
  let data = of(input);
  let collectionSnub = {
    snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(data)
  }
  let angularFireSnub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionSnub)
  }

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
