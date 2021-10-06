import {createReducer, on } from '@ngrx/store';
import {ITask} from "@app/interface/task.type";
import {IMenu} from "@app/interface/menu.type";
import {DEFAULT_MENU} from '@todoist/config/const'
import {createTask, changeMenu} from './todoist.actions';

export const TODO_FEATURE_KEY = 'todo';

export interface TodoState {
  counter: number;
  menus: IMenu[];
  title: string;
  tasks: ITask[];
}

export const initialState: TodoState = {
  counter: 123,
  menus: DEFAULT_MENU,
  title: 'My day',
  tasks: []
};

export const totoReducer = createReducer(
  initialState,
    on(changeMenu, (state, {id}) => {
      console.log('id', id)
      const menus: IMenu[] = [].concat(state.menus).map((menu) => {
        menu.active = (menu.name === id)

        return menu;
      })

      return {...state}
    }),
    on(createTask, (state, {task}) => {

      console.log('tasl', task)

      return {...state, tasks: state.tasks}
    }),
)
