import {Comment} from './item-list/comments/comment.model';

export class Item {
  constructor(public title: string, public comments: Comment[] = []) {
  }


}
