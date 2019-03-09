import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../../item.model";
import {ItemsService} from "../../../items.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() position: number;

  constructor(private itemsService: ItemsService, private router: Router) {
  }

  ngOnInit() {
  }

  onDelete(position: number) {
    this.itemsService.removeItem(position);
  }

  onNavigate() {
    this.router.navigate([this.position]);
  }
}
