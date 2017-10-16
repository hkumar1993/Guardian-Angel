import { gql } from 'react-apollo';

export const NEED_REQUEST_ADDED = gql`
  subscription {
    needRequestAdded {
      _id
      need{
        _id
        title
        description
        completed
        createdAt
        updatedAt
      }
      user {
        _id
        username
        email
        firstName
        lastName
        avatar
        createdAt
        updatedAt
      }
    }
  }
`;

export const NEED_REQUEST_DELETED = gql`
  subscription {
    needRequestDeleted {
      _id
      need{
        title
        description
        completed
        createdAt
        updatedAt
      }
      user {
        _id
        username
        email
        firstName
        lastName
        avatar
        createdAt
        updatedAt
      }
    }
  }
`;
