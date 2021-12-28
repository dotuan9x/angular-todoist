import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { EMPTY } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  getProjectsAction,
  updateProjectsAction,
  getTasksAction,
  createTaskAction,
  updateTasksAction
} from "@todoist/todoist.actions";
import { ProjectService, TaskService } from "@app/services";
import { TaskEntity, CreateTaskInputType } from "@app/interface";

@Injectable()
export class TodoistEffects {
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectsAction),
      mergeMap(() => this.projectService.getAll()
        .pipe(
          map(({ data, loading }) => updateProjectsAction({ projects: data, loading })),
          catchError(() => EMPTY)
        ))
    )
  );

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasksAction),
      mergeMap(({ projectId, status }) => this.taskService.getAll(projectId, status)
        .pipe(
          map(({ data, loading }) => {
            data = data.map((task) => {
              const attribute = plainToInstance(TaskEntity, task.attributes);

              return {
                id: task.id,
                ...attribute
              }
            })

            return updateTasksAction({ tasks: data, loading })
          }),
          catchError(() => EMPTY)
        ))
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTaskAction),
      mergeMap(({ task }) => this.taskService.createTask(task as CreateTaskInputType)
      .pipe(
          map(tasks => updateTasksAction({ tasks: [] })),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {
  }
}
