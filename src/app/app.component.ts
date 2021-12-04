import { Component, OnDestroy } from '@angular/core';
import { PostsService } from './posts/services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'The App';
  isLoading: boolean;
  postsLoadedSubscription: Subscription;


  constructor(
    private postsService: PostsService
  ) {
    this.isLoading = this.postsService.isLoading;
    this.postsLoadedSubscription = this.postsService.postsLoaded.subscribe(
      (isLoading)=>{
        this.isLoading = isLoading;
      }
    );
  }

  ngOnDestroy(): void {
    this.postsLoadedSubscription.unsubscribe();
  }
}
