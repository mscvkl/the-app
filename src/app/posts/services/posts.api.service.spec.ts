import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, of } from 'rxjs';

import { PostsApiService } from './posts.api.service';
import { Post } from '../models/post';


describe('PostsApiService', () => {
  let service: PostsApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let mockPosts: Post[] = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }];

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        PostsApiService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(PostsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected posts', () => {
    httpClientSpy.get.and.returnValue(of(mockPosts));

    return firstValueFrom<Post[]>(service.getPosts()).then((posts)=>{
      expect(posts).toEqual(mockPosts);
    });
  });

});
