import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    error404Component,CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'courses', component: CourseListComponent
        },
        
        {
          path: 'courses/info/:id', component: CourseInfoComponent
        },
        
        {
          path: '', redirectTo: 'courses', pathMatch: 'full'
        },
        
        {
          path:'**', component: error404Component
        }
      ]
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
