import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  @Input() title: string = "Title";

  // @Output() onClickTask = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    console.log('ngOnInit', this.title)
  }

  onClickTask() {
    console.log('onClickTask')
    // this.onClickTask.emit()
  }

  onClickTaskDone() {

  }

  onClickTaskStar() {

  }
}
