import { PostModeEnum } from './post-mode.enum';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  mode?: PostModeEnum;
}
