import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {Store} from "@ngrx/store";
import {TodoState} from "@todoist/todoist.reducer";
import {updateTaskAction} from "@todoist/todoist.actions";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  @Input() id: string = "";
  @Input() title: string = "Title";
  @Input() status: string

  constructor(private store: Store<TodoState>) {

  }

  ngOnInit(): void {

  }

  onClickTask() {
    console.log('onClickTask')

  }

  onClickTaskDone() {
    this.store.dispatch(updateTaskAction({
      id: this.id,
      status: 'DONE'
    }))
  }

  onClickTaskStar() {

  }
}
