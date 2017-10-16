import { gql } from 'react-apollo';

export const GET_NEED_REQUESTS = gql`
  query getNeedRequests($_id: ID!){
    getNeedRequests(_id: $_id){
      _id
      need {
        _id
        title
      }
      user{
        _id
        firstName
        lastName
        avatar
        username
      }
    }
  }
`;

export const GET_USER_REQUESTS = gql`
  query getUserRequests($_id: ID!){
    getUserRequests(_id: $_id){
      _id
      need {
        _id
        title
      }
      user{
        _id
        firstName
        lastName
        avatar
        username
      }
    }
  }
`;
