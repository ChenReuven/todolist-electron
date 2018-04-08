import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todlist-footer',
  template: `
    <footer class="footer">
      <span class="todo-count"><strong>0</strong> items left</span>
      <button class="clear-completed">Clear completed
      </button>
    </footer>
  `,
  styleUrls: ['./todlist-footer.component.css']
})
export class TodlistFooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
