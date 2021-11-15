import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {QUERY_TASKS} from '@app/graphql'
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class TaskService {
  tasks: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {
  }

  createTask() {

  }

  getAll() {
    return this.apollo.watchQuery<any>({
      query: QUERY_TASKS
    }).valueChanges.pipe(
      map(result => result.data.tasks)
    );
  }
}
