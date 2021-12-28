import {createReducer, on } from '@ngrx/store';
import produce from 'immer'
import {ISortBy, ITask, IProject} from "@app/interface";
import {IMenu} from "@app/interface/menu.type";

import {DEFAULT_MENU} from '@todoist/config/const'
import {updateProjectsAction, updateTasksAction, createTaskAction, changeMenuAction, changeSortBy} from './todoist.actions';

export const TODO_FEATURE_KEY = 'todo';

export interface TodoState {
  isAuthenticated: boolean,
  menus: {
    data: IMenu[],
    loading?: boolean
  }
  projects: {
    data: IProject[],
    loading?: boolean
  }
  tasks: {
    data: ITask[],
    loading?: boolean
  }
  sortBy?: ISortBy;
}

export const initialState: TodoState = {
  isAuthenticated: true,
  menus: {
    data: DEFAULT_MENU,
    loading: false
  },
  projects: {
    data: [],
    loading: false
  },
  tasks: {
    data: [],
    loading: false
  }
};

export const totoReducer = createReducer(
  initialState,
    on(updateProjectsAction, (state, {projects, loading}) => {
      return produce(state, draftState => {
        // Update menu
        draftState.menus = {
          data: projects.map((project) => {
            const {id, attributes} = project;

            return {
              name: attributes.name || id,
              label: attributes.title,
              active: false,
              icon: attributes.icon,
            }
          }),
          loading
        }

        draftState.projects = {
          data: projects.map((project) => {
            const {id, attributes} = project;

            return {
              id,
              name: attributes.name || id,
              title: attributes.title,
              description: attributes.description,
              icon: attributes.icon,
            }
          }),
          loading
        }
      })
    }),
    on(changeMenuAction, (state, {id}) => {
      return produce(state, draftState => {
        draftState.menus?.data?.map((menu) => {
          menu.active = (menu.name === id)

          return menu;
        })
      })
    }),
    on(updateTasksAction, (state, {tasks}) => {
      return produce(state, draftState => {
        draftState.tasks = {
          data: tasks,
          loading: true
        }
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
