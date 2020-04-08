import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {CoronaComponent} from './components/corona/corona.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/projects' },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'Home' } },
  { path: 'about', component: AboutMeComponent, data: { animation: 'About' } },
  { path: 'corona', component: CoronaComponent, data: { animation: 'About' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
