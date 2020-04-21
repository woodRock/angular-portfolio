import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {CoronaComponent} from './components/corona/corona.component';
import {LanguagesComponent} from './components/languages/languages.component';

export const routes: Routes = [
  { path: 'code', component: ProjectsComponent, data: { animation: 'code' } },
  { path: 'language', component: LanguagesComponent, data: {animation: 'language'} },
  { path: 'person', component: AboutMeComponent, data: { animation: 'person' } },
  { path: 'map', component: CoronaComponent, data: { animation: 'map' } },
  { path: '', pathMatch: 'full', redirectTo: '/code' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
