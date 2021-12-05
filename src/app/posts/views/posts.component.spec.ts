import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { PostsComponent } from './posts.component';
import { PostsService } from '../services/posts.service';

@Component({selector: 'app-post', template: ''})
class PostStubComponent {
}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postsServiceSpy: jasmine.SpyObj<PostsService>;

  beforeEach(async () => {
    postsServiceSpy = jasmine.createSpyObj('PostsService', ['loadAll']);

    await TestBed.configureTestingModule({
      declarations: [
        PostsComponent,
        PostStubComponent
      ],
      providers: [
        { provide: PostsService, useValue: postsServiceSpy },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
