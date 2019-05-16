import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const BLOG_ROUTES = [
    {
        path: 'blog',
        children: [
            {
                path: '',
                component: BlogListComponent,
            },
            {
                path: ':blogId',
                component: BlogDetailComponent
            }]

    }
];
