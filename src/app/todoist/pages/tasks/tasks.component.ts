import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Router, ActivatedRoute, NavigationEnd} from "@angular/router";
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';

import {ISort, ITask, ISortBy} from "@app/interface/task.type";
import {TaskService} from "@app/services/task.service";
import {TASK_SORT} from "@todoist/config/const";

import {getProjectsAction, changeSortBy, createTaskAction, getTasksAction, changeMenuAction} from "@todoist/todoist.actions";
import {TodoState} from '@app/todoist/todoist.reducer'
import {getProjects, getTasks, getSortBy} from '@app/todoist/todoist.selectors'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['tasks.component.scss']
})
export class TasksComponent implements OnInit {
  showLoading: boolean = true;
  title: string = "My day";
  today: number = Date.now();
  tasks: ITask[] = [];
  sorts: ISort[] = TASK_SORT;
  sortBy: Observable<ISortBy>;
  openDrawer: boolean = false;
  collapseTaskDone: boolean = true;

  constructor(
    private taskService: TaskService,
    private store: Store<TodoState>,
    private router: Router,
    private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('taskId');

    if (id) {
      this.getTasksByProjectId(id);
    }

    // Check route change
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const id = this.route.snapshot.paramMap.get('taskId');

        if (id) {
          this.getTasksByProjectId(id);
        }
      }
    })

    this.sortBy = store.select(getSortBy)

    // Tasks from store
    store.select(getTasks).subscribe((tasks) => {
      this.tasks = [].concat(tasks);

      // @todo
      this.showLoading = false;
    })
  }

  ngOnInit(): void {
    this.store.dispatch(getProjectsAction());
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  getTasksByProjectId(id: string) {
    if (id) {
      // Update menu active
      this.store.dispatch(changeMenuAction({
        id: id
      }))

      this.store.select(getProjects).subscribe(({data}) => {
        const project = data.find((project) => project.name === id || project.id === id);

        if (project) {
          const {id: projectId, title} = project;
          this.title = title

          this.store.dispatch(getTasksAction({projectId: projectId}));
        }
      })
    }
  }

  onClickSort(sort: ISort) {
    this.store.dispatch(changeSortBy(sort))
  }

  onClickSuggestions() {
    this.openDrawer = !this.openDrawer;
  }

  onAddTask(taskName) {
    if (taskName) {
      this.store.dispatch(createTaskAction({
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
