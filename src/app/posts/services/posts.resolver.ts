import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable } from 'rxjs';

import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<boolean> {

  constructor(
    private postsService: PostsService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.postsService.loadAll()
      .pipe(
        map(()=>{
          return true;
        })
      );
  }
}
