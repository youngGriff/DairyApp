import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './home/item-list/item-list.component';
import {ItemComponent} from "./home/item-list/item/item.component";

@NgModule({
  declarations: [HomeComponent, ItemListComponent, ItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
