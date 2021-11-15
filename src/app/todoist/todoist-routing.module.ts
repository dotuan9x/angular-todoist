import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SearchComponent } from "@todoist/pages/search/search.component";
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'tasks/:taskId',
    component: TasksComponent
  },
  {
    path: 'search/:keyword',
    component: SearchComponent
  },
  {
    path: '',
    redirectTo: 'tasks/myday',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
