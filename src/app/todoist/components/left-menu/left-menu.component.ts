import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router, ActivatedRoute} from "@angular/router";
import {Store} from '@ngrx/store'
import {Observable} from "rxjs";

import {TodoState} from "@todoist/todoist.reducer";
import {getMenus} from "@todoist/todoist.selectors";

import {IMenu} from '@app/interface/menu.type'
import {changeMenu} from "@todoist/todoist.actions";

@Component({
  selector: '[left-menu]',
  templateUrl: './left-menu.component.html'
})
export class LeftMenuComponent implements OnInit {
  menus: Observable<IMenu[]>

  constructor(private store: Store<TodoState>, private route: ActivatedRoute, private router: Router) {
    this.menus = this.store.select(getMenus)

    // Check route change
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        const taskId = this.route.snapshot.paramMap.get('taskId');

        if (taskId) {
          this.store.dispatch(changeMenu({
            id: taskId
          }))
        }
        console.log('taskId', taskId)
      }
    })
  }

  ngOnInit(): void {
  }

}
