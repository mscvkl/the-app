import { Component } from '@angular/core';
import { PostsService } from './posts/services/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The App';
  isLoading$: Observable<boolean>;

  constructor(
    private postsService: PostsService
  ) {
    this.isLoading$ = this.postsService.isLoading$;
  }
}
