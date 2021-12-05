import { TestBed } from '@angular/core/testing';

import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

describe('PostsResolver', () => {
  let resolver: PostsResolver;
  let postsServiceSpy: jasmine.SpyObj<PostsService>;

  beforeEach(() => {
    postsServiceSpy = jasmine.createSpyObj('PostsService', ['loadAll']);

    TestBed.configureTestingModule({
      providers: [
        PostsResolver,
        { provide: PostsService, useValue: postsServiceSpy }
      ]
    });
    resolver = TestBed.inject(PostsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
