import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Entity} from '../models/entity.model';
import {Inject, Injectable} from '@angular/core';

function serialize<T>(object: T) {
  return JSON.parse(JSON.stringify(object));
}

@Injectable({
  providedIn: 'root'
})
export class CrudService<T extends Entity> {
  private collection: AngularFirestoreCollection<T>;

  constructor(private afs: AngularFirestore) {}

  public setName(name: string) {
    this.collection = this.afs.collection(name);
  }

  add(entity: T, id?: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      if (id) {
        this.collection
          .doc(id)
          .set(serialize(entity))
          .then(ref => {
            resolve(entity);
          });
      } else {
        this.collection.add(serialize(entity)).then(ref => {
          const newEntity = {
            id: ref.id,
            ...entity
          };
          resolve(newEntity);
        });
      }
    });
  }

  get(id: string): Observable<T> {
    return this.collection
      .doc<T>(id)
      .snapshotChanges()
      .pipe(
        map(doc => {
          if (doc.payload.exists) {
            const data = doc.payload.data() as T;
            const payloadId = doc.payload.id;
            return { id: payloadId, ...data };
          }
        })
      );
  }

  list(): Observable<T[]> {
    return this.collection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as T;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  update(entity: T): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.collection
        .doc<T>(entity.id as string)
        .set(serialize(entity))
        .then(() => {
          resolve({
            ...entity
          });
        });
    });
  }

  delete(id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.collection
        .doc<T>(id)
        .delete()
        .then(() => {
          resolve();
        });
    });
  }
}
