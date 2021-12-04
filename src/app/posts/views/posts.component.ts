import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(
    private postsService: PostsService
  ) {
    this.posts$ = this.postsService.posts$;
  }

  ngOnInit(): void {
  }

  onPostClicked(post: Post): void {
    this.postsService.toggleMode(post.id, post.mode);
  }

  trackById(index: number, post: Post){
    return post?.id;
  }

}
