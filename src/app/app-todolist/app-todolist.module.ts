import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodolistComponent} from './todolist/todolist.component';
import {TodolistHeaderComponent} from './todolist-header/todolist-header.component';
import {TodlistMainComponent} from './todlist-main/todlist-main.component';
import {TodlistFooterComponent} from './todlist-footer/todlist-footer.component';
import {TodolistItemsComponent} from './todolist-items/todolist-items.component';
import {TodolistItemComponent} from './todolist-item/todolist-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodolistComponent,
    TodolistHeaderComponent,
    TodlistMainComponent,
    TodlistFooterComponent, TodolistItemsComponent, TodolistItemComponent],
  exports: [TodolistComponent]
})
export class AppTodolistModule {
  a = "dsad";
}
