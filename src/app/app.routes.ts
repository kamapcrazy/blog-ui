import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { BLOG_ROUTES } from './blog/blog.routes';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            breadcrumb: 'Home'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            breadcrumb: 'About'
        }
    },
    {
        path: 'user',
        component: UserComponent,
        data: {
            breadcrumb: 'User'
        }
    },
    ...BLOG_ROUTES
];

export const APP_ROUTES = routes;