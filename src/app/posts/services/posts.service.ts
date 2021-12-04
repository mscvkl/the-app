import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';

import { Post } from '../models/post';
import { PostsApiService } from './posts.api.service';
import { PostModeEnum } from '../models/post-mode.enum';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts$ = new BehaviorSubject<Post[]>([]);

  constructor(
    private postsApiService: PostsApiService
  ) {
  }

  loadAll(){
    return this.postsApiService
      .getPosts()
      .pipe(
        map((posts)=>{
          return this.addMode(posts);
        }),
        tap((posts)=>{
          this.posts$.next(posts);
        })
      );
  }

  getAll(){
    return this.posts$.asObservable();
  }

  toggleMode(postId: number, mode?: PostModeEnum){
    let posts: Post[] = [];

    this.posts$.getValue().forEach((post)=>{
      posts.push({
        ...post,
        mode: post.id === postId
          ? (mode === PostModeEnum.showId ? PostModeEnum.showUserId : PostModeEnum.showId)
          : post.mode
      });
    });

    this.posts$.next(posts);
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
