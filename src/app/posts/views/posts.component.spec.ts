import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { PostsService } from '../services/posts.service';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postsServiceSpy: jasmine.SpyObj<PostsService>;

  beforeEach(async () => {
    postsServiceSpy = jasmine.createSpyObj('PostsService', ['loadAll']);

    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [
        { provide: PostsService, useValue: postsServiceSpy }
      ]
    })
    .compileComponents();
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
