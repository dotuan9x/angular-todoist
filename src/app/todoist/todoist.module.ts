import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { TaskRoutingModule } from './todoist-routing.module';
import {MatMenuModule} from "@angular/material/menu";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";

import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component'
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component'
import {MatTooltipModule} from "@angular/material/tooltip";
import {DragDropModule} from "@angular/cdk/drag-drop";

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
    ReactiveFormsModule,
    MatMenuModule,
    MatCheckboxModule,
    TaskRoutingModule,
    MatRadioModule,
    MatTooltipModule,
    DragDropModule
  ]
})
export class TodoistModule { }
