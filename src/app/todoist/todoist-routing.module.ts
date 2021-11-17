import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {TodoistComponent} from "@todoist/todoist.component";
import {TasksComponent} from "@todoist/pages/tasks/tasks.component";
import {SearchComponent} from "@todoist/pages/search/search.component";

const routes: Routes = [
  {
    path: '',
    component: TodoistComponent,
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
  exports: [RouterModule]
})
export class TodoistRoutingModule {}
