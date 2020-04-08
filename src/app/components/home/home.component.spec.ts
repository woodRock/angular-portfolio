import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {RouterTestingModule} from "@angular/router/testing";
import {AngularFirestore} from "@angular/fire/firestore";
import {Feature} from "../../models/feature.model";
import {of} from "rxjs";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let input: Feature[] = [];
  let data = of(input);
  let collectionSnub = {
    snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(data)
  }
  let angularFireSnub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionSnub)
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          RouterTestingModule.withRoutes([])
      ],
      declarations: [ HomeComponent ],
      providers: [
        { provide: AngularFirestore, useValue: angularFireSnub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
