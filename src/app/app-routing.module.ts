import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BLOG_ROUTES } from './blog/blog.routes';
import { APP_ROUTES } from './app.routes';

const routes = [
  ...APP_ROUTES,
  ...BLOG_ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
