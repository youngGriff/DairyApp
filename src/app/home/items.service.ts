import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Comment} from "./home/item-list/comments/comment.model";
import {Item} from "./home/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private static ITEMS_KEY = 'ITEMS_KEY';
  private readonly items: Item[];
  items$ = new BehaviorSubject<Item[]>([]);

  constructor() {
    const items: Item[] = JSON.parse(localStorage.getItem(ItemsService.ITEMS_KEY)) || [];
    this.items = items as Item[];
   // console.log(items);
    this.items$.next(this.items);
  }

  addItem(item: Item) {
    this.items.push(item);
    this.items$.next(this.items);
    this.storeChanges();
  }

  getItem(pos: number) {
    return this.items[pos];
  }

  removeItem(position) {
    this.items.splice(position, 1);
    this.items$.next(this.items);
    this.storeChanges();

  }

  addComment(currentPosition: number, value: string) {
    this.items[currentPosition].comments.push(new Comment(value));
    this.items$.next(this.items);
    this.storeChanges();
  }

  storeChanges() {
    localStorage.setItem(ItemsService.ITEMS_KEY, JSON.stringify(this.items));
  }
}
