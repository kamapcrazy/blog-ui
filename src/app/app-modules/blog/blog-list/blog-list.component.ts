import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: any[];

  constructor(private router: Router) { }

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
  }

  goToDetail(id: number) {
    this.router.navigate(['/blog', id]);
  }

}
