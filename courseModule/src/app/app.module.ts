import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,  
        
    NavBarComponent,
    error404Component,
    
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot(
      [              
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
