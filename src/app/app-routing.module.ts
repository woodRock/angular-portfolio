import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'aboutme', component: AboutMeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}