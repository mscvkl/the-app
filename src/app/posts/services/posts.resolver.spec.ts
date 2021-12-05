import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Component } from '@angular/core';
import { of } from 'rxjs';

import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { Post } from '../models/post';

let mockSnapshot:any = jasmine.createSpyObj<RouterStateSnapshot>("RouterStateSnapshot", ['toString']);

@Component({
  template: '<router-outlet></router-outlet>'
})
class RoutingComponent { }

@Component({
  template: ''
})
class DummyComponent { }

describe('PostsResolver', () => {
  let resolver: PostsResolver;
  let postsServiceSpy: jasmine.SpyObj<PostsService>;
  let route: ActivatedRouteSnapshot;
  let mockPosts: Post[] = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }];

  beforeEach(() => {
    postsServiceSpy = jasmine.createSpyObj('PostsService', ['loadAll']);

    TestBed.configureTestingModule({
      providers: [
        PostsResolver,
        { provide: PostsService, useValue: postsServiceSpy },
        { provide: RouterStateSnapshot, useValue: mockSnapshot}
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'route1', component: DummyComponent},
          {path: 'route2', component: DummyComponent}
        ])
      ],
    }).compileComponents();

    resolver = TestBed.inject(PostsResolver);
    route = new ActivatedRouteSnapshot();
    postsServiceSpy.loadAll.and.returnValue(of(mockPosts));
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it(`should return true` ,
    inject([PostsResolver], (service: PostsResolver) => {
      resolver
        .resolve(route, mockSnapshot)
        .subscribe((resolved)=>{
          expect(resolved).toBeTruthy();
        });
    }));

});
