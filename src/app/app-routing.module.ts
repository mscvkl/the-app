import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { postsRoutingPaths } from './posts/posts-routing.module';
import { ErrorComponent } from './error/error.component';

export const appRoutingPaths = {
  error: 'error'
};

const routes: Routes = [
  {
    path: appRoutingPaths.error,
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: postsRoutingPaths.posts
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
