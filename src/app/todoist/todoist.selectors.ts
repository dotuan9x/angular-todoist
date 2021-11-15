import { createFeatureSelector, createSelector } from '@ngrx/store';
import {TODO_FEATURE_KEY, TodoState} from "@todoist/todoist.reducer";

const todoSelector = createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

export const getProjects = createSelector(todoSelector, state => {
  return state.projects
});

export const getMenus = createSelector(todoSelector, state => {
  return state.menus
});

export const getTitle = createSelector(todoSelector, state => {
  return state.title
});

export const getTasks = createSelector(todoSelector, state => {
  return state.tasks
});

export const getSortBy = createSelector(todoSelector, state => {
  return state.sortBy
});
