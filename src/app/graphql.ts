import {gql} from 'apollo-angular';

// Reference => https://apollo-angular.com/docs/data/queries
export const QUERY_PROJECTS = gql`
  query query {
    projects {
      title
    }
  }
`;

export const QUERY_TASKS = gql`
  query query {
    tasks {
      title
    }
  }
`;
