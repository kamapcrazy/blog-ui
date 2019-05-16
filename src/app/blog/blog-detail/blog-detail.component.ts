import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, OnDestroy {

  sub: any;

  blogs: any[];
  blog: any[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.blogs = [
      {
        id: 1,
        name: 'blog 1'
      },
      {
        id: 2,
        name: 'blog 2'
      }
    ];

    this.sub = this.activatedRoute.params.subscribe(params => {
      const id = +params.blogId;
      this.blog = this.blogs.find(x => x.id === id);
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
