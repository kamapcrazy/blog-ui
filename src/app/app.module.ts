// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// external libraries
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// app modules
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    // angular core
    BrowserModule,
    BrowserAnimationsModule,

    // external libraries
    MDBBootstrapModule.forRoot(),

    // internal
    AppRoutingModule,
    BlogModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
