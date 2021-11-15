import {createReducer, on } from '@ngrx/store';
import produce from 'immer'
import {ISortBy, ITask, IProject} from "@app/interface";
import {IMenu} from "@app/interface/menu.type";

import {DEFAULT_MENU} from '@todoist/config/const'
import {updateProjectsAction, createTask, changeMenu, changeSortBy} from './todoist.actions';

export const TODO_FEATURE_KEY = 'todo';

export interface TodoState {
  menus: IMenu[];
  title: string;
  projects: IProject[];
  tasks: ITask[];
  sortBy?: ISortBy;
}

export const initialState: TodoState = {
  menus: DEFAULT_MENU,
  title: 'My day',
  projects: [],
  tasks: []
};

export const totoReducer = createReducer(
  initialState,
    on(updateProjectsAction, (state, {projects}) => {
      return produce(state, draftState => {
        draftState.projects = projects
      })
    }),
    on(changeMenu, (state, {id}) => {
      return produce(state, draftState => {
        draftState.menus.map((menu) => {
          menu.active = (menu.name === id)

          return menu;
        })
      })
    }),
    on(changeSortBy, (state, sort) => {
      return {...state, sortBy: {name: sort.name, az: 'asc'}}
    }),
    on(createTask, (state, {task}) => {

      console.log('tasl', task)

      return {...state, tasks: state.tasks}
    }),
)
