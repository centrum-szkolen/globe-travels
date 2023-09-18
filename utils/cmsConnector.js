import { GraphQLClient } from 'graphql-request';


export const cmsConnect = async (query, variables) => {
  const url = process.env.REACT_APP_ENDPOINT ?? '123';
  const client = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.REACT_APP_HYGRAPH_TOKEN ?? '123',
    },
  });
  return client.request(query, variables);
};