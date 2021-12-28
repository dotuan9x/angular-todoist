import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {TodoState} from "@todoist/todoist.reducer";
import {getMenus} from "@todoist/todoist.selectors";
import {IMenu} from '@app/interface'

@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  menus: Observable<IMenu[]>

  constructor(private store: Store<TodoState>) {
    this.menus = this.store.select(getMenus).pipe(map(menus => menus.data));
  }

  ngOnInit(): void {}

}
