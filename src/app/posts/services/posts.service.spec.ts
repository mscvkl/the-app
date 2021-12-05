import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, firstValueFrom, lastValueFrom } from 'rxjs';

import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PostsApiService } from './posts.api.service';
import { Post } from '../models/post';
import { PostModeEnum } from '../models/post-mode.enum';

describe('PostsService', () => {
  let service: PostsService;
  let postsApiServiceSpy: jasmine.SpyObj<PostsApiService>;
  let postsMock = new BehaviorSubject<Post[]>([{
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
  ]);

  beforeEach(() => {
    postsApiServiceSpy = jasmine.createSpyObj('PostsApiService', ['getPosts']);

    TestBed.configureTestingModule({
      providers: [
        PostsResolver,
        { provide: PostsApiService, useValue: postsApiServiceSpy }
      ]
    });
    service = TestBed.inject(PostsService);
    postsApiServiceSpy.getPosts.and.returnValue(postsMock.asObservable());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty array', () => {
    service.posts$.subscribe((posts)=>{
      expect(posts.length).toBe(0);
    });
  });

  it('should return Post[] with 2 elements and showId mode for each Post object', () => {
    return firstValueFrom<Post[]>(service.loadAll()).then((posts)=>{
      expect(posts.length).toBe(2);
    });
  });

  it('should return Post[] with PostModeEnum.showId mode for each Post object', () => {
    return firstValueFrom<Post[]>(service.loadAll()).then((posts)=>{
      expect(posts[0].mode).toBe(PostModeEnum.showId);
      expect(posts[1].mode).toBe(PostModeEnum.showId);
    });
  });

  it('should return Post object with PostModeEnum.showUserId mode', () => {
    return firstValueFrom<Post[]>(service.loadAll()).then((posts)=>{
      service.toggleMode(1);

      return firstValueFrom<Post[]>(service.posts$).then((posts)=>{
        expect(posts[0].mode).toBe(PostModeEnum.showUserId);
      });
    });
  });

  it('should return Post object with PostModeEnum.showId mode', () => {
    return firstValueFrom<Post[]>(service.loadAll()).then((posts)=>{
      service.toggleMode(1);
      service.toggleMode(1);

      return firstValueFrom<Post[]>(service.posts$).then((posts)=>{
        expect(posts[0].mode).toBe(PostModeEnum.showId);
      });
    });
  });

});
