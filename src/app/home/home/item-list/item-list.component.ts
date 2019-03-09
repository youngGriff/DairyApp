import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from "../../item.model";
import {ItemsService} from "../../items.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {
  items$: BehaviorSubject<Item[]>;

  constructor(private itemsService: ItemsService) {
    this.items$ = itemsService.items$;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.itemsService.storeChanges();
  }

  onAddItem(value: string) {
    this.itemsService.addItem(new Item(value));
  }
}
