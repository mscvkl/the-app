import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { PostsApiService } from './posts.api.service';


describe('PostsApiService', () => {
  let service: PostsApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

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
});
