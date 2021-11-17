import { Component } from '@angular/core';

@Component({
  selector: 'app-todoist',
  templateUrl: './todoist.component.html',
  styles: [':host { width: 100% }']
})
export class TodoistComponent {
  openDrawer: boolean = false;

  onClickSuggestions() {
    this.openDrawer = !this.openDrawer;
  }
}
