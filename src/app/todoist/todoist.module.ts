import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {StoreModule} from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import {PureAbility} from "@casl/ability";

import { TodoistRoutingModule } from './todoist-routing.module';
import {MatMenuModule} from "@angular/material/menu";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {RecurrenceModule} from "calendar-recurrence";
import {AbilityModule} from "@casl/angular";

import { TodoistComponent } from "@todoist/todoist.component";
import { TasksComponent } from './pages/tasks/tasks.component';
import { SearchComponent } from "@todoist/pages/search/search.component";
import { TaskComponent } from './components/task/task.component'
import { AddTaskComponent } from './components/add-task/add-task.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ResizerComponent } from "./components/resizer/resizer.component";
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component'
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { SkeletonComponent } from "./components/skeleton/skeleton.component";

import { AppAbility } from '@app/services';
import {TODO_FEATURE_KEY, totoReducer} from "./todoist.reducer";
import {TodoistEffects} from "@todoist/todoist.effects";

@NgModule({
  declarations: [
    TodoistComponent,
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
    TaskDetailComponent,
    SkeletonComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DragDropModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatSidenavModule,
    MatButtonModule,
    RecurrenceModule,
    TodoistRoutingModule,
    AbilityModule,
    StoreModule.forFeature(TODO_FEATURE_KEY, totoReducer),
    EffectsModule.forRoot([TodoistEffects])
  ],
  providers: [
    { provide: AppAbility, useValue: new AppAbility() },
    { provide: PureAbility, useExisting: AppAbility },
  ],
})
export class TodoistModule { }
