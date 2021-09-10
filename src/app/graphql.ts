import {gql} from 'apollo-angular';

export const QUERY_RATES = gql`
  query query {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
