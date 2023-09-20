import { gql } from "graphql-request";

export const POST_NEW_ORDER = gql`
  mutation MyMutation(
    $persons: Int!
    $start: Date!
    $end: Date!
    $finalPrice: Float!
    $airport: Airports!
    $food: Food!
  ) {
    createOrder(
      data: {
        persons: $persons
        start: $start
        end: $end
        finalPrice: $finalPrice
        airport: $airport
        food: $food
      }
    ) {
      persons
      start
      end
      finalPrice
      airport
      food
    }
  }
`;
