import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './home/item-list/item-list.component';
import {ItemComponent} from "./home/item-list/item/item.component";
import {FormsModule} from "@angular/forms";
import { CommentsComponent } from './home/item-list/comments/comments.component';
import { CommentItemComponent } from './home/item-list/comments/comment-item/comment-item.component';

@NgModule({
  declarations: [HomeComponent, ItemListComponent, ItemComponent, CommentsComponent, CommentItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
