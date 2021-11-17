import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {QUERY_TASKS, CREATE_TASK} from '@app/graphql'
import {map} from "rxjs/operators";
import {ICreateTaskInput} from "@app/interface";

@Injectable({providedIn: 'root'})
export class TaskService {
  tasks: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {
  }

  createTask(input: ICreateTaskInput) {
    return this.apollo.mutate({
      mutation: CREATE_TASK,
      variables: {
        ...input
      },
    }).pipe(map(result => result.data))
  }

  getAll(projectId: string) {
    return this.apollo.watchQuery<any>({
      query: QUERY_TASKS,
      variables: {
        projectId: projectId,
      },
    }).valueChanges.pipe(
      map(result => result.data.tasks)
    );
  }
}
