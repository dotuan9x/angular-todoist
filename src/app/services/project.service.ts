import { Inject, Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {QUERY_RATES} from '@app/graphql'

@Injectable({ providedIn: 'root' })
export class ProjectService {
  projects: any[];

  constructor(private apollo: Apollo) {}
}
