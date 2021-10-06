import { createAction, props } from '@ngrx/store';
import {ITask} from "@app/interface/task.type";

export interface Action {
  type: string
}

export const changeMenu = createAction('[Todoist] Change Menu', props<{id: string}>())
export const createTask = createAction('[Todoist] Create Task', props<{task: ITask}>());
export const updateTask = createAction('[Todoist] Update Task', props<ITask>());
