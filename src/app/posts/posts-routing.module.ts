import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './views/posts.component';
import { PostsResolver } from './services/posts.resolver';

export const postsRoutingPaths = {
  posts: 'posts'
};

const routes: Routes = [
  {
    path: postsRoutingPaths.posts,
    component: PostsComponent,
    resolve: {
      postsResolver: PostsResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule { }
