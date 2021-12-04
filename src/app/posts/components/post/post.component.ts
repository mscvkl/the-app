import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Post } from '../../models/post';
import { PostModeEnum } from '../../models/post-mode.enum';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() postDetails?: Post
  @Output() postClick = new EventEmitter<Post>();

  postMode = PostModeEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onPostClick(){
    this.postClick.emit(this.postDetails);
  }

}
