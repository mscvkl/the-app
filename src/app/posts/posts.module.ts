import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './views/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsApiService } from './services/posts.api.service';
import { PostComponent } from './components/post/post.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [
    PostsApiService,
    PostsService
  ]
})
export class PostsModule { }
