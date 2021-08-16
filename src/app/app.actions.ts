import { createAction } from '@ngrx/store';

export interface Action {
  type: string
}

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
