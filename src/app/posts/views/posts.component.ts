import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsUpdatedSubscription: Subscription;

  constructor(
    private postsService: PostsService
  ) {
    this.posts = this.postsService.posts;
    this.postsUpdatedSubscription = this.postsService.postsUpdated.subscribe(
      (posts)=>{
        this.posts = posts;
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.postsUpdatedSubscription.unsubscribe();
  }

  onPostClicked(post: Post): void {
    this.postsService.toggleMode(post.id, post.mode);
  }

  trackById(index: number, post: Post){
    return post?.id;
  }

}
