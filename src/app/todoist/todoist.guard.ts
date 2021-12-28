import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';
import {take} from "rxjs/operators";
import {Store} from '@ngrx/store';

import {TodoState} from "@todoist/todoist.reducer";
import {getAuthenticated} from "@todoist/todoist.selectors";

export class Permissions {
  canActivate(user: string, id: string): boolean {
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodoistGuard implements CanActivate {
  constructor(private permissions: Permissions, private store: Store<TodoState>) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    (async () => {
      const $authenticated = this.store.select(getAuthenticated).pipe(take(1))
      console.log('authenticated', await lastValueFrom($authenticated))
    })()

    return this.permissions.canActivate("1", "1")
  }

}
