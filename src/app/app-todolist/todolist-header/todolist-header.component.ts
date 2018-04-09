import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist-header',
  templateUrl: './todolist-header.component.html',
  styleUrls: ['./todolist-header.component.css']
})
export class TodolistHeaderComponent implements OnInit {
  @Input() title;

  constructor() {}

  ngOnInit() {}
}
