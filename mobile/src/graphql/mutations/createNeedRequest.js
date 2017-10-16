import { gql } from 'react-apollo';

// import FeedCard from '../../components/FeedCard/FeedCard';

export default gql`
  mutation createNeedRequest($user: ID!, $need: ID!) {
    createNeedRequest(user: $user, need: $need) {
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
        firstName
        lastName
        email
        avatar
        createdAt
        updatedAt
      }
    }
  }
`;
