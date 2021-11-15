import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {NavigationStart, Router, ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';

import {IMenu} from "@app/interface/menu.type";
import {ISort, ITask, ISortBy} from "@app/interface/task.type";
import {TaskService} from "@app/services/task.service";
import {TASK_SORT} from "@todoist/config/const";

import {getProjectsAction, changeSortBy, createTask} from "@todoist/todoist.actions";
import {TodoState} from '@app/todoist/todoist.reducer'
import {getProjects, getTitle, getTasks, getSortBy} from '@app/todoist/todoist.selectors'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['tasks.component.scss']
})
export class TasksComponent implements OnInit {
  title: Observable<string>;
  today: number = Date.now();
  tasks: ITask[] = [];
  sorts: ISort[] = TASK_SORT;
  sortBy: Observable<ISortBy>;
  openDrawer: boolean = false;
  collapseTaskDone: boolean = true;
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
    this.sortBy = store.select(getSortBy)

    store.select(getTasks).subscribe((tasks) => {
      this.tasks = [].concat(tasks)
    })
  }

  ngOnInit(): void {
    // this.taskService.getTasks();

    this.store.dispatch(getProjectsAction());

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
    this.store.dispatch(changeSortBy(sort))
  }

  onClickSuggestions() {
    this.openDrawer = !this.openDrawer;
  }

  onAddTask(taskName) {
    if (taskName) {
      this.store.dispatch(createTask({
        task: {
          title: taskName,
          status: 'TODO'
        }
      }));
    }
  }

  onClickCollapseTaskDone() {
    this.collapseTaskDone = !this.collapseTaskDone;
  }
}
