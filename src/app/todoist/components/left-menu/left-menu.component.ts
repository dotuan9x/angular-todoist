import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router, ActivatedRoute} from "@angular/router";
import {Store} from '@ngrx/store'
import {Observable} from "rxjs";
import {map} from 'rxjs/operators'

import {TodoState} from "@todoist/todoist.reducer";
import {getMenus, getProjects} from "@todoist/todoist.selectors";

import {IProject, IMenu} from '@app/interface'
import {changeMenu} from "@todoist/todoist.actions";

@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  menus: Observable<IMenu[]>
  projects: Observable<IProject[]>

  constructor(private store: Store<TodoState>, private route: ActivatedRoute, private router: Router) {
    this.menus = this.store.select(getMenus);

    //console.log('this.projects', this.projects)

    // Check route change
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const taskId = this.route.snapshot.paramMap.get('taskId');

        if (taskId) {
          this.store.dispatch(changeMenu({
            id: taskId
          }))
        }
      }
    })
  }

  ngOnInit(): void {}

}
