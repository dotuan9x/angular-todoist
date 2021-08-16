import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './app.actions';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({...state, counter: state.counter + 1})),
  on(decrement, (state) => ({...state, counter: state.counter - 1})),
  on(reset, (state) => ({...state, counter: 0})),
);

export function reducer(state: State | undefined, action: Action) {
  return _counterReducer(state, action);
}
