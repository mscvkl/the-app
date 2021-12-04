import { EventEmitter, Injectable } from '@angular/core';
import { delay, finalize, map, tap } from 'rxjs';

import { Post } from '../models/post';
import { PostsApiService } from './posts.api.service';
import { PostModeEnum } from '../models/post-mode.enum';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _isLoading: boolean = false;
  get isLoading(){
    return this._isLoading;
  }

  private _posts: Post[] = [];
  get posts(){
    return this._posts;
  }

  private _postsLoaded = new EventEmitter<boolean>();
  get postsLoaded(){
    return this._postsLoaded.asObservable();
  }

  private _postsUpdated = new EventEmitter<Post[]>();
  get postsUpdated(){
    return this._postsUpdated.asObservable();
  }

  constructor(
    private postsApiService: PostsApiService
  ) {
  }

  loadAll(){
    this.setLoadingState(true);

    return this.postsApiService
      .getPosts()
      .pipe(
        delay(1000),
        map((posts)=>{
          return this.addMode(posts);
        }),
        tap((posts)=>{
          this.storePosts(posts);
          this._postsUpdated.emit(posts);
        }),
        finalize(()=>{
          this.setLoadingState(false);
        })
      );
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
    this._postsUpdated.emit(posts);
  }

  private setLoadingState(state: boolean){
    this._isLoading = state;
    this._postsLoaded.emit(state);
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
    this._posts = [
      ...posts
    ];
  }

}
