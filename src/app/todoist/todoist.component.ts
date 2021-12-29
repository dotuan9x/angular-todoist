import {Component, OnInit} from '@angular/core';
import { Ability, AbilityBuilder } from '@casl/ability';

@Component({
  selector: 'app-todoist',
  templateUrl: './todoist.component.html',
  styles: [':host { width: 100% }']
})
export class TodoistComponent implements OnInit{
  openDrawer: boolean = false;

  constructor(private ability: Ability) {}

  ngOnInit() {
    const { can, rules } = new AbilityBuilder(Ability);
    can('create', 'Todo');
    //can('read', 'all');

    this.ability.update(rules)
  }

  onClickSuggestions() {
    this.openDrawer = !this.openDrawer;
  }
}
