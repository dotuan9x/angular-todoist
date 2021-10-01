import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {NavigationStart, Router} from "@angular/router";
import {Apollo} from 'apollo-angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import {ITask} from "@app/interface/task.type";
import {QUERY_RATES} from '@app/graphql'

import {createTask} from "@todoist/todoist.actions";
import {TodoState} from '@app/todoist/todoist.reducer'
import {getCounter} from '@app/todoist/todoist.selectors'

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
  count$: Observable<number>

  constructor(
    private apollo: Apollo,
    private store: Store<TodoState>,
    private router: Router) {
    // Check route change
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
          console.log('NavigationStart', val )
      }
    })

    this.count$ = store.select(getCounter)

    console.log('this.count$', this.count$)
  }

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

  onAddTask(taskName) {
    console.log('taskName', taskName)
    if (taskName) {
      this.store.dispatch(createTask({
        task: {
          title: taskName,
          status: 'TODO'
        }
      }));
    }
  }
}
