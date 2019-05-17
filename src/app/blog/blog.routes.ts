import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const BLOG_ROUTES = [
    {
        path: 'blog',
        data: {
            breadcrumb: 'Blog'
        },
        children: [
            {
                path: '',
                component: BlogListComponent
            },
            {
                path: ':blogId',
                component: BlogDetailComponent,
                data: {
                    breadcrumb: 'Detail'
                }
            }]
    }
];
