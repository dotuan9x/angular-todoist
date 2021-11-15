import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {QUERY_PROJECTS} from '@app/graphql'

@Injectable({providedIn: 'root'})
export class ProjectService {
  projects: any[];

  constructor(private apollo: Apollo) {
  }

  getAll() {
    return this.apollo.watchQuery<any>({
      query: QUERY_PROJECTS
    }).valueChanges
      .pipe(
        map(result => result.data.projects)
      );
  }
}
