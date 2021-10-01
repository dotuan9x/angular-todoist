import {createReducer, on } from '@ngrx/store';
import {ITask} from "@app/interface/task.type";
import { increment, decrement, reset, createTask } from './todoist.actions';

export const TODO_FEATURE_KEY = 'todo';

export interface TodoState {
  counter: number;
  tasks: ITask[]
}

export const initialState: TodoState = {
  counter: 123,
  tasks: []
};

export const totoReducer = createReducer(
  initialState,
    on(increment, (state) => ({...state, counter: state.counter + 1})),
    on(decrement, (state) => ({...state, counter: state.counter - 1})),
    on(reset, (state) => ({...state, counter: 0})),
    on(createTask, (state, {task}) => {

      console.log('tasl', task)

      return {...state, tasks: state.tasks}
    }),
)
