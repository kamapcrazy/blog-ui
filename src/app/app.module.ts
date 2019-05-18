// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// external libraries
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// app modules
import { AppRoutingModule } from './app-modules/app-routing/app-routing.module';
import { BlogModule } from './app-modules/blog/blog.module';

// app components
import { AppComponent } from './app.component';
import { BreadCrumbComponent } from './app-components/bread-crumb/bread-crumb.component';
import { HomeComponent } from './app-components/home/home.component';
import { AboutComponent } from './app-components/about/about.component';
import { UserComponent } from './app-components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbComponent,
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
