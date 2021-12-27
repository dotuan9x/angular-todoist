import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {TodoistComponent} from "@todoist/todoist.component";
import {TasksComponent} from "@todoist/pages/tasks/tasks.component";
import {SearchComponent} from "@todoist/pages/search/search.component";
import {TodoistGuard, Permissions} from "@todoist/todoist.guard";

const routes: Routes = [
  {
    path: '',
    component: TodoistComponent,
    canActivate: [TodoistGuard],
    children: [
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'search/:keyword',
        component: SearchComponent
      },
      {
        path: ':taskId',
        component: TasksComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TodoistGuard, Permissions]
})
export class TodoistRoutingModule {}
