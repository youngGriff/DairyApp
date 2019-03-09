import {Component, OnInit} from '@angular/core';
import {Item} from "../../../item.model";
import {ItemsService} from "../../../items.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  private currentItem: Item;
  private currentPosition: number;
  private subscription: Subscription;

  constructor(private itemsService: ItemsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.currentPosition = +params['id'];
      this.currentItem = this.itemsService.getItem(this.currentPosition);
    });
  }

  onSubmitComment(value) {
    if (!value.isEmpty) {
      this.itemsService.addComment(this.currentPosition, value)
    }
  }
}
