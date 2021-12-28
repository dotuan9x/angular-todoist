import {gql} from 'apollo-angular';

// Reference => https://apollo-angular.com/docs/data/queries
export const QUERY_PROJECTS = gql`
  query query {
    projects {
      data {
        id
        attributes {
          name
          title
          description
          icon
          predefined
        }
      }
    }
  }
`;

// Reference => https://strapi.io/documentation/developer-docs/latest/development/plugins/graphql.html#query-api
export const QUERY_TASKS = gql`
  query query($status: String) {
    tasks(filters: {status: {eq: $status}}) {
      data {
          id
          attributes {
              title
              description
              important
              status
          }
      }
    }
  }
`;

export const QUERY_TASKS_DONE = gql`
  query query {
    tasks {
      data {
        id
        attributes {
          title
          description
          important
          status
        }
      }
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($title: String!, $description: String, $publishedAt: DateTime) {
    createTask(data: {
      title: $title,
      description: $description
      publishedAt: $publishedAt
    }) {
      data {
        id
        attributes {
           title
        }
      }
    }
  }
`;
