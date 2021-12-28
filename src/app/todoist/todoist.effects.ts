import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Store} from "@ngrx/store";
import { EMPTY } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import {validate} from 'class-validator';
import { map, mergeMap, catchError} from 'rxjs/operators';

import {getProjectsAction, updateProjectsAction, getTasksAction, updateTasksAction} from "@todoist/todoist.actions";
import {ProjectService, TaskService} from "@app/services";
import {TaskEntity} from "@app/interface";

@Injectable()
export class TodoistEffects {
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectsAction),
      mergeMap(() => this.projectService.getAll()
        .pipe(
          map(({data, loading}) => updateProjectsAction({projects: data, loading})),
          catchError(() => EMPTY)
        ))
    )
  );

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasksAction),
      mergeMap(({ projectId }) => this.taskService.getAll(projectId)
        .pipe(
          map(({data, loading}) => {
            data = data.map((task) => {
              const attribute = plainToInstance(TaskEntity, task.attributes);

              (async () => {
                const errors = await validate(attribute);

                if (errors.length > 0) {
                  console.log('errors', errors)
                  return {}
                } else {
                  return {
                    id: task.id,
                    ...attribute
                  }
                }
              })()
            }).filter((task) => Object.keys(task).length > 0)

            return updateTasksAction({tasks: data, loading})
          }),
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
