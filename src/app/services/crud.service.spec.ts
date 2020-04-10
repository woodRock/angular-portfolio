import {TestBed} from '@angular/core/testing';
import {CrudService} from './crud.service';
import {Feature} from '../models/feature.model';
import {AngularFirestore} from '@angular/fire/firestore';

describe('CrudService', () => {

  const crudServiceSnub = {

  };

  const angularFireSnub = {

  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: angularFireSnub },
      { provide: CrudService, useValue: crudServiceSnub }
    ]
  }));

  it('should be created', () => {
    const service: CrudService<Feature> = TestBed.get(CrudService);
    expect(service).toBeTruthy();
  });
});
