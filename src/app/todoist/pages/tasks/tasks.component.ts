import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ITask} from "@app/interface/task.type";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['tasks.component.scss']
})
export class TasksComponent implements OnInit {
  title = 'My day'
  today: number = Date.now();
  tasks: ITask[] = [
    {
      title: "Hello",
      status: 'TODO',
      important: false,
      created: new Date()
    },
    {
      title: "Hello 1",
      status: 'TODO',
      important: false,
      created: new Date()
    },
    {
      title: "Hello 2",
      status: 'TODO',
      important: false,
      created: new Date()
    },
    {
      title: "Hello 3",
      status: 'TODO',
      important: false,
      created: new Date()
    },
    {
      title: "Hello 4",
      status: 'TODO',
      important: false,
      created: new Date()
    },
    {
      title: "Hello 5",
      status: 'TODO',
      important: false,
      created: new Date()
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
