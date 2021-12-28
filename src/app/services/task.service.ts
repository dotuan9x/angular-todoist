import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {QUERY_TASKS, CREATE_TASK} from '@app/graphql'
import {map} from "rxjs/operators";
import {CreateTaskInputType} from "@app/interface";

@Injectable({providedIn: 'root'})
export class TaskService {
  tasks: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {
  }

  createTask(input: CreateTaskInputType) {
    return this.apollo.mutate({
      mutation: CREATE_TASK,
      variables: {
        ...input
      },
    }).pipe(map(result => {
      return {
        data: result.data
      }
    }))
  }

  getAll(projectId: string, status?: string) {
    return this.apollo.watchQuery<any>({
      query: QUERY_TASKS,
      variables: {
        projectId: projectId,
        status
      },
    }).valueChanges.pipe(
      map(result => {
        return {
          data: result.data.tasks.data,
          loading: result.loading,
          networkStatus: result.networkStatus
        }
      })
    );
  }
}
