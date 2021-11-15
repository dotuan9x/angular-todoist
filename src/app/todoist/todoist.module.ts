import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {StoreModule} from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';

import { TaskRoutingModule } from './todoist-routing.module';
import {MatMenuModule} from "@angular/material/menu";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";

import { TasksComponent } from './pages/tasks/tasks.component';
import {SearchComponent} from "@todoist/pages/search/search.component";
import { TaskComponent } from './components/task/task.component'
import { AddTaskComponent } from './components/add-task/add-task.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ResizerComponent } from "./components/resizer/resizer.component";
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component'
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

import {TODO_FEATURE_KEY, totoReducer} from "./todoist.reducer";
import {TodoistEffects} from "@todoist/todoist.effects";

@NgModule({
  declarations: [
    TasksComponent,
    SearchComponent,
    TaskComponent,
    LeftMenuComponent,
    ResizerComponent,
    SvgDefinitionsComponent,
    SvgIconComponent,
    AddTaskComponent,
    NotFoundComponent,
    SuggestionComponent,
    TaskDetailComponent
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
    MatButtonModule,
    StoreModule.forFeature(TODO_FEATURE_KEY, totoReducer),
    EffectsModule.forRoot([TodoistEffects])
  ]
})
export class TodoistModule { }
