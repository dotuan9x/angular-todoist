import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './todoist-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component'
import { LeftMenuComponent } from './components/left-menu/left-menu.component'

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TodoistModule { }
