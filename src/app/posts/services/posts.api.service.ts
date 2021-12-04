import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/post';
import { POSTS_CONFIG } from '../configs/api.config';

@Injectable({
  providedIn: 'root'
})
export class PostsApiService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getPosts(){
    return this.httpClient.get<Post[]>(POSTS_CONFIG.posts);
  }
}
