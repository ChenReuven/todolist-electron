import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todolist-items',
  templateUrl: './todolist-items.component.html',
  styleUrls: ['./todolist-items.component.css']
})
export class TodolistItemsComponent implements OnInit {

  @Input() items: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
