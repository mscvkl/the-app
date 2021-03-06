import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, finalize, map, tap } from 'rxjs';

import { Post } from '../models/post';
import { PostsApiService } from './posts.api.service';
import { PostModeEnum } from '../models/post-mode.enum';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  get isLoading$(){
    return this._isLoading$.asObservable();
  }

  private _posts$ = new BehaviorSubject<Post[]>([]);
  get posts$(){
    return this._posts$.asObservable();
  }

  constructor(
    private postsApiService: PostsApiService
  ) {
  }

  loadAll(){
    this._isLoading$.next(true);

    return this.postsApiService
      .getPosts()
      .pipe(
        delay(1000),
        map((posts)=>{
          return this.addMode(posts);
        }),
        tap((posts)=>{
          this._posts$.next(posts);
        }),
        finalize(()=>{
          this._isLoading$.next(false);
        })
      );
  }

  toggleMode(postId: number){
    let posts: Post[] = [];

    this._posts$.getValue().forEach((post)=>{
      posts.push({
        ...post,
        mode: post.id === postId
          ? (post.mode === PostModeEnum.showId ? PostModeEnum.showUserId : PostModeEnum.showId)
          : post.mode
      });
    });

    this._posts$.next(posts);
  }

  private addMode(posts: Post[]): Post[]{
    return posts.map((post)=>{
      return {
        ...post,
        mode: PostModeEnum.showId
      };
    });
  }

}
