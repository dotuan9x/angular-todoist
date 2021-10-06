import { Inject, Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {QUERY_RATES} from '@app/graphql'

@Injectable({ providedIn: 'root' })
export class TaskService {
  tasks: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  createTask() {

  }

  getTasks() {
    this.apollo
      .watchQuery({
        query: QUERY_RATES
      })
      .valueChanges.subscribe((result: any) => {
      this.tasks = result?.data?.rates;
      this.loading = result.loading;
      this.error = result.error;
    });
  }
}
