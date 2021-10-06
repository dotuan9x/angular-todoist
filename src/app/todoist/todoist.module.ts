import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {StoreModule} from "@ngrx/store";

import { TaskRoutingModule } from './todoist-routing.module';
import {MatMenuModule} from "@angular/material/menu";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";

import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component'
import { AddTaskComponent } from './components/add-task/add-task.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ResizerComponent } from "./components/resizer/resizer.component";
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component'
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';

import {TODO_FEATURE_KEY, totoReducer} from "./todoist.reducer";

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    LeftMenuComponent,
    ResizerComponent,
    SvgDefinitionsComponent,
    SvgIconComponent,
    AddTaskComponent,
    NotFoundComponent,
    SuggestionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DragDropModule,
    MatMenuModule,
    MatCheckboxModule,
    TaskRoutingModule,
    MatRadioModule,
    MatTooltipModule,
    MatSidenavModule,
    StoreModule.forFeature(TODO_FEATURE_KEY, totoReducer),
  ]
})
export class TodoistModule { }
