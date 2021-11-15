import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError} from 'rxjs/operators';
import {getProjectsAction, getTasksAction} from "@todoist/todoist.actions";
import {ProjectService, TaskService} from "@app/services";

@Injectable()
export class TodoistEffects {
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectsAction),
      mergeMap(() => this.projectService.getAll()
        .pipe(
          map(projects => ({ type: '[Todoist] Update Projects', projects: projects })),
          catchError(() => EMPTY)
        ))
    )
  );

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasksAction),
      mergeMap(() => this.taskService.getAll()
        .pipe(
          map(tasks => ({ type: '[Todoist] Update Tasks', tasks: tasks })),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}
}
