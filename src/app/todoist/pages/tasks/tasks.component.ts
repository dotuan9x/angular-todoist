import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Apollo} from 'apollo-angular';
import {ITask} from "@app/interface/task.type";
import {QUERY_RATES} from '@app/graphql'

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

  rates: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: QUERY_RATES
    })
    .valueChanges.subscribe((result: any) => {
      this.rates = result?.data?.rates;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
