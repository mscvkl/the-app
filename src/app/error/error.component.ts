import { Component, OnInit } from '@angular/core';

import { postsRoutingPaths } from '../posts/posts-routing.module';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  postsRoutingPaths = postsRoutingPaths;

  constructor() { }

  ngOnInit(): void {
  }

}
