import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutMeComponent} from './about-me.component';
import {HomeComponent} from "../home/home.component";
import {RouterTestingModule} from "@angular/router/testing";
import {AngularFirestore} from "@angular/fire/firestore";
import {Social} from "../../models/social.model";
import {of} from "rxjs";

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
  const input: Social[] = []
  const data = of(input);
  const collectionStub = {
    snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(data)
  }
  let angularFireSnub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          RouterTestingModule.withRoutes([])
      ],
      declarations: [
          AboutMeComponent,
          HomeComponent
      ],
      providers: [
        { provide: AngularFirestore, useValue: angularFireSnub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
