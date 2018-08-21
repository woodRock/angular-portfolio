import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoxItemComponent } from './project-box-item.component';

describe('ProjectBoxItemComponent', () => {
  let component: ProjectBoxItemComponent;
  let fixture: ComponentFixture<ProjectBoxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBoxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBoxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
