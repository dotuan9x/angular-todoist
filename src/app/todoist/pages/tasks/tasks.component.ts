import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {NavigationStart, Router, ActivatedRoute, ParamMap} from "@angular/router";
import {Apollo} from 'apollo-angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import {IMenu} from "@app/interface/menu.type";
import {ISort, ITask, ISortBy} from "@app/interface/task.type";
import {QUERY_RATES} from '@app/graphql'
import {TaskService} from "@app/services/task.service";
import {TASK_SORT} from "@todoist/config/const";

import {createTask} from "@todoist/todoist.actions";
import {TodoState} from '@app/todoist/todoist.reducer'
import {getTitle} from '@app/todoist/todoist.selectors'

import {of} from 'rxjs'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['tasks.component.scss']
})
export class TasksComponent implements OnInit {
  title: Observable<string>;
  today: number = Date.now();
  menus: IMenu[] = [];
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
  sorts: ISort[] = TASK_SORT;
  sortBy: ISortBy = {};
  openDrawer: boolean = false;
  rates: any[];
  loading = true;
  error: any;

  constructor(
    private taskService: TaskService,
    private store: Store<TodoState>,
    private router: Router,
    private route: ActivatedRoute) {
    // Check route change
    /*router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        const taskId = this.route.snapshot.paramMap.get('taskId');
        console.log('taskId', taskId)
      }
    })*/

    this.title = store.select(getTitle)
  }

  ngOnInit(): void {
    this.taskService.getTasks();
    /*this.apollo
    .watchQuery({
      query: QUERY_RATES
    })
    .valueChanges.subscribe((result: any) => {
      this.rates = result?.data?.rates;
      this.loading = result.loading;
      this.error = result.error;
    });*/
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  onClickSort(sort: ISort) {

  }

  onClickSuggestions() {
    this.openDrawer = !this.openDrawer;
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
