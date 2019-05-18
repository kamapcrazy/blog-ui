import { Routes } from '@angular/router';
import { HomeComponent } from '../app-components/home/home.component';
import { AboutComponent } from '../app-components/about/about.component';
import { UserComponent } from '../app-components/user/user.component';
import { BLOG_ROUTES } from '../app-modules/blog/blog.routes';



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