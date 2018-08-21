import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectBoxItemComponent } from './project-box-item/project-box-item.component';
import { ProjectButtonComponent } from './project-button/project-button.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectBoxItemComponent,
    ProjectButtonComponent,
    AboutMeComponent,
    HomeComponent,
    DashboardComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
