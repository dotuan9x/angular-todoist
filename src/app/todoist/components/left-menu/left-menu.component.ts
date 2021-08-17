import { Component, Input, OnInit } from '@angular/core';
import {TMenu} from '@app/interface/menu'

@Component({
  selector: '[app-left-menu]',
  templateUrl: './left-menu.component.html'
})
export class LeftMenuComponent implements OnInit {
  @Input() menus: TMenu[] = [
    {name: 'myday', label: 'My Day', active: true, icon: 'sun'},
    {name: 'important', label: 'Important', active: false, icon: 'star'},
    {name: 'planned', label: 'Planned', active: false, icon: 'calendar'},
    {name: 'task', label: 'Task', active: false, icon: 'home'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
