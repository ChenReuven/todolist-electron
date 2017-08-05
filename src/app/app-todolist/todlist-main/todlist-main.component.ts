import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-todlist-main',
  templateUrl: './todlist-main.component.html',
  styleUrls: ['./todlist-main.component.css']
})
export class TodlistMainComponent implements OnInit {

  items: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
