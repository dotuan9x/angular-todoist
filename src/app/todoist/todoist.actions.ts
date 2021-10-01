import { createAction, props } from '@ngrx/store';
import {ITask} from "@app/interface/task.type";

export interface Action {
  type: string
}

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_RESET = 'COUNTER_RESET';

// export const persistVolume = createAction('[Settings] Persist Volume', props<{ volume: number }>());
export const increment = createAction(COUNTER_INCREMENT);
export const decrement = createAction(COUNTER_DECREMENT);
export const reset = createAction(COUNTER_RESET);
export const createTask = createAction('[Todoist] Create Task', props<{task: ITask}>());
