import { EventEmitter, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

import { Post } from '../models/post';
import { PostsApiService } from './posts.api.service';
import { PostModeEnum } from '../models/post-mode.enum';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];

  postsUpdated = new EventEmitter<Post[]>();

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
          this.storePosts(posts);
          this.postsUpdated.emit(posts);
        })
      );
  }

  getAll(){
    return this.posts;
  }

  toggleMode(postId: number, mode?: PostModeEnum){
    let posts: Post[] = [];

    this.posts.forEach((post)=>{
      posts.push({
        ...post,
        mode: post.id === postId
          ? (mode === PostModeEnum.showId ? PostModeEnum.showUserId : PostModeEnum.showId)
          : post.mode
      });
    });

    this.storePosts(posts);
    this.postsUpdated.emit(posts);
  }

  private addMode(posts: Post[]): Post[]{
    return posts.map((post)=>{
      return {
        ...post,
        mode: PostModeEnum.showId
      };
    });
  }

  private storePosts(posts: Post[]){
    this.posts = [
      ...posts
    ];
  }

}
