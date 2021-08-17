import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './todoist-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component'
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component'

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    LeftMenuComponent,
    SvgDefinitionsComponent,
    SvgIconComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TodoistModule { }
