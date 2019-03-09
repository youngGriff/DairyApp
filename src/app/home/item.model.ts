import {Comment} from './comment.model';

export class Item {
  constructor(public title: string, public comments: Comment[] = []) {
  }


}
