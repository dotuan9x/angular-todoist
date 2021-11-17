import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, find, withLatestFrom, catchError} from 'rxjs/operators';
import {Store, select} from "@ngrx/store";
import {
  getProjectsAction,
  updateProjectsAction,
  getTasksAction,
  updateTasksAction,
  createTaskAction
} from "@todoist/todoist.actions";
import {ProjectService, TaskService} from "@app/services";
import {getProjects} from "@todoist/todoist.selectors";

@Injectable()
export class TodoistEffects {
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectsAction),
      mergeMap(() => this.projectService.getAll()
        .pipe(
          map(projects => updateProjectsAction({projects: projects})),
          catchError(() => EMPTY)
        ))
    )
  );

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasksAction),
      mergeMap(({ projectId }) => this.taskService.getAll(projectId)
        .pipe(
          map(tasks => updateTasksAction({tasks: tasks})),
          catchError(() => EMPTY)
        ))
    )
  );

  /*createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTaskAction),
      mergeMap(({ task }) => this.taskService.createTask(task).pipe(
        map(task => updateTasksAction({tasks: tasks})),
        catchError(() => EMPTY)
      ))
    )
  );*/

  constructor(
    private actions$: Actions,
    private store: Store,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}
}
