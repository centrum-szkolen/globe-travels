import { gql } from "graphql-request";


export const GET_ALL_TRAVELS = gql`
  query {
    offers {
      id
      title
      slug
    }
  }

`