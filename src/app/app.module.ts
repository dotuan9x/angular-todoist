import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './todoist/components/breadcrumb/breadcrumb.component';

// Reducer
import * as appReducer from './app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer.reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
