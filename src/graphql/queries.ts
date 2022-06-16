import { gql } from "graphql-request";

export const GET_ALL_REPOSITORIES = gql`
  query getAllRepositories() {
    repositories {
      id
      title
      url
    }
  }
`;

export const ADD_NEW_REPOSITORY = gql`
  mutation addNewRepository($url: String!, $title: String) {
    createRepository(data: { url: $url, title: $title }) {
      id
    }
  }
`;

export const DELETE_REPOSITORY = gql`
  mutation deleteRepository($url: String!) {
    deleteRepository(where: { url: $url }) {
      id
    }
  }
`;
