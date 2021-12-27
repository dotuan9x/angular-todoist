import { createFeatureSelector, createSelector } from '@ngrx/store';
import {TODO_FEATURE_KEY, TodoState} from "@todoist/todoist.reducer";

const todoSelector = createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

export const getAuthenticated = createSelector(todoSelector, state => {
  return state.isAuthenticated
});

export const getProjects = createSelector(todoSelector, state => {
  return state.projects
});

export const getMenus = createSelector(todoSelector, state => {
  return state.menus
});

export const getTasks = createSelector(todoSelector, state => {
  return state.tasks
});

export const getSortBy = createSelector(todoSelector, state => {
  return state.sortBy
});
