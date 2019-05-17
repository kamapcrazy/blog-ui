import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from './bread-crumb';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import _ from 'lodash';

const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'newAngular';
  breadcrumbs: IBreadcrumb[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
        console.log(this.breadcrumbs);
      });
  }


  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      const breadcrumbLabel = child.snapshot.data[ROUTE_DATA_BREADCRUMB];
      if (breadcrumbs.findIndex(x => x.label === breadcrumbLabel) > -1) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      url += `/${routeURL}`;

      const breadcrumb: IBreadcrumb = {
        label: breadcrumbLabel,
        params: this.getParam(child.snapshot.params),
        url
      };
      breadcrumbs.push(breadcrumb);

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

  private getParam(paramObj: any) {
    const result = paramObj[Object.keys(paramObj)[0]];
    if (result) {
      return result;
    } else {
      return '';
    }
  }
}
