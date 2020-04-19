import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {HomeComponent} from './components/home/home.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {TitleComponent} from './components/title/title.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {SortGridPipe} from './util/sort-grid.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';
import {CoronaComponent} from './components/corona/corona.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LanguagesComponent} from './components/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    ProjectsComponent,
    TitleComponent,
    SortGridPipe,
    TimeAgoPipe,
    CoronaComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule ,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
