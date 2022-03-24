import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot(
      [              
        {
          path: '', redirectTo: 'courses', pathMatch: 'full'
        }   
      ]
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
