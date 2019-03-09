import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CommentsComponent} from "./home/item-list/comments/comments.component";

const routes: Routes = [{
  path: '', component: HomeComponent, children: [
    {path: ':id', component: CommentsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
