import { createAction, props } from '@ngrx/store';
import {ITask, ISort, ProjectGraphQLResult} from "@app/interface";

export interface Action {
  type: string
}

// Project
export const getProjectsAction = createAction('[Todoist] Get Projects')
export const updateProjectsAction = createAction('[Todoist] Update Projects', props<{projects: ProjectGraphQLResult[], loading?: boolean}>());

// Menu
export const changeMenuAction = createAction('[Todoist] Change Menu', props<{id: string}>());

// Tasks
export const getTasksAction = createAction('[Todoist] Get Tasks', props<{projectId: string, status?: string}>());
export const updateTasksAction = createAction('[Todoist] Update Tasks', props<{tasks: ITask[], loading?: boolean}>());
export const createTaskAction = createAction('[Todoist] Create Task', props<{task: ITask}>());
export const updateTaskAction = createAction('[Todoist] Update Task', props<ITask>());

export const changeSortBy = createAction('[Todoist] Change Sort By', props<ISort>());
