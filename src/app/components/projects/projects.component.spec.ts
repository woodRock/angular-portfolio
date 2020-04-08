import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProjectsComponent} from './projects.component';
import {SortGridPipe} from "../../util/sort-grid.pipe";
import {TimeAgoPipe} from "time-ago-pipe";
import {AngularFirestore} from "@angular/fire/firestore";
import {Project} from "../../models/project.model";
import {of} from "rxjs";

describe('ProjectsComponent', () => {

  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let input: Project[] = [];
  let data = of(input);
  let collectionSnub = {
    snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(data)
  }
  let angularFireSnub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionSnub)
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ProjectsComponent,
          SortGridPipe,
          TimeAgoPipe
      ],
      providers : [
        { provide: AngularFirestore, useValue: angularFireSnub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use hyphen case for projects', () => {
    const test: string = "project with spaces";
    const expected: string = "project-with-spaces";
    expect(component.getFolderName(test)).toEqual(expected);
  });

  it('should use lower case for projects', () => {
    const test: string = "Project With Upper Case";
    const expected: string = "project-with-upper-case";
    expect(component.getFolderName(test)).toEqual(expected);
  });
});
