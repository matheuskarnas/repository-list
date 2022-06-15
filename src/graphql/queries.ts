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

export const ADD_NEW_REPOSITORY = gql`
  mutation createRepository($url: String!, $title: String) {
    createRepository(data: { url: $url, title: $title }) {
      id
    }
  }
`;

export const DELETE_REPOSITORY = gql`
  mutation MyMutation($url: String!) {
    deleteRepository(where: { url: $url }) {
      id
    }
  }
`;
