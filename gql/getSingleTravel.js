import { gql } from "graphql-request";


export const GET_SINGLE_TRAVEL = gql`
 query Offer($slug: String) {
   offer(where:{slug:$slug}) {
     short
     amenities
     createdAt
     id
     images {
       url
     }
     location {
       latitude
       longitude
     }
     title
     stars
     description {
       html
     }
   }
 }

`