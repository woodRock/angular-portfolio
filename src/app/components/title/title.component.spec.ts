import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TitleComponent} from './title.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatTabsModule} from '@angular/material/tabs';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        MatTabsModule
      ],
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should capitalize the title', () => {
    const test = 'title';
    const expected = 'Title';
    expect(component.capitalise(test)).toEqual(expected);
  });
});
