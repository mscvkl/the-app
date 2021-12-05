import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PostsApiService } from './posts.api.service';

describe('PostsService', () => {
  let service: PostsService;
  let postsApiServiceSpy: jasmine.SpyObj<PostsApiService>;

  beforeEach(() => {
    postsApiServiceSpy = jasmine.createSpyObj('PostsApiService', ['getPosts']);

    TestBed.configureTestingModule({
      providers: [
        PostsResolver,
        { provide: PostsApiService, useValue: postsApiServiceSpy }
      ]
    });
    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
