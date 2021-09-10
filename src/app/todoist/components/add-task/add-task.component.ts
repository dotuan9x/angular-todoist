import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent implements OnInit {
  @ViewChild('addTaskInput') addTaskInput;
  @Output() onAddTask = new EventEmitter<string>();
  isFocus: boolean = false;
  addTaskControl: FormControl

  constructor() { }

  ngOnInit(): void {
    this.addTaskControl = new FormControl('')
  }

  onEnterAddTask() {
    this.onSubmit()
  }

  onClickAddTask() {
    if (!this.isFocus) {
      this.isFocus = true

      // focus input add to task
      setTimeout(() => {
        this.addTaskInput.nativeElement.focus()
      }, 10)
    }
  }

  onBlurAddTask() {
    this.isFocus = false
    this.onSubmit()
  }

  onSubmit() {
    this.onAddTask.emit(this.addTaskControl.value)
    // reset task input
    this.addTaskControl.patchValue('')

  }
}
