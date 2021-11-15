import { createAction, props } from '@ngrx/store';
import {ITask, ISort, IProject} from "@app/interface";

export interface Action {
  type: string
}

// Project
export const getProjectsAction = createAction('[Todoist] Get Projects')
export const updateProjectsAction = createAction('[Todoist] Update Projects', props<{projects: IProject[]}>());

// Menu
export const changeMenu = createAction('[Todoist] Change Menu', props<{id: string}>());

// Tasks
export const getTasksAction = createAction('[Todoist] Get Tasks', props<{projectId: string}>());
export const updateTasksAction = createAction('[Todoist] Update Tasks', props<{tasks: ITask[]}>());
export const createTask = createAction('[Todoist] Create Task', props<{task: ITask}>());
export const updateTask = createAction('[Todoist] Update Task', props<ITask>());

export const changeSortBy = createAction('[Todoist] Change Sort By', props<ISort>());
