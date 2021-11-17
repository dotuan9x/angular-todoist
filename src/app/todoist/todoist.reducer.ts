import {createReducer, on } from '@ngrx/store';
import produce from 'immer'
import {ISortBy, ITask, IProject} from "@app/interface";
import {IMenu} from "@app/interface/menu.type";

import {DEFAULT_MENU} from '@todoist/config/const'
import {updateProjectsAction, updateTasksAction, createTaskAction, changeMenuAction, changeSortBy} from './todoist.actions';

export const TODO_FEATURE_KEY = 'todo';

export interface TodoState {
  menus: IMenu[];
  projects: IProject[];
  tasks: ITask[];
  sortBy?: ISortBy;
}

export const initialState: TodoState = {
  menus: DEFAULT_MENU,
  projects: [],
  tasks: []
};

export const totoReducer = createReducer(
  initialState,
    on(updateProjectsAction, (state, {projects}) => {
      return produce(state, draftState => {
        // Update menu
        draftState.menus = projects.map((project) => {
          return {
            name: project.name || project.id,
            label: project.title,
            active: false,
            icon: project.icon,
          }
        })

        draftState.projects = projects
      })
    }),
    on(changeMenuAction, (state, {id}) => {
      return produce(state, draftState => {
        draftState.menus.map((menu) => {
          menu.active = (menu.name === id)

          return menu;
        })
      })
    }),
    on(updateTasksAction, (state, {tasks}) => {
      return produce(state, draftState => {
        draftState.tasks = tasks
      })
    }),
    on(changeSortBy, (state, sort) => {
      return {...state, sortBy: {name: sort.name, az: 'asc'}}
    }),
    on(createTaskAction, (state, {task}) => {

      console.log('tasl', task)

      return {...state, tasks: state.tasks}
    }),
)
