import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { APP_ROUTES } from '../../app-share/app.routes';
import { BLOG_ROUTES } from '../blog/blog.routes';
import { AppRoutingComponent } from './app-routing.component';

const routes = [
  ...APP_ROUTES,
  ...BLOG_ROUTES
];

@NgModule({
  declarations: [
    AppRoutingComponent
  ],
  imports: [
    MDBBootstrapModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    AppRoutingComponent
  ]
})
export class AppRoutingModule { }
