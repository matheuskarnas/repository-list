import { gql } from "graphql-request";

export const GET_ALL_REPOSITORIES = gql`
  query getRepositories() {
    repositories {
      id
      title
      url
    }
  }
`;
