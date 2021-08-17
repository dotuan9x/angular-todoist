import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./todoist/todoist.module').then((m) => m.TodoistModule)
  },
  /*{
    path: '**',
    component: PageNotFoundComponent
  },  // Wildcard route for a 404 page*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
