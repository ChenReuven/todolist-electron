import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit() {}
}
