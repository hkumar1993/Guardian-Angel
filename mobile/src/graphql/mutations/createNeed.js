import { gql } from 'react-apollo';

// import FeedCard from '../../components/FeedCard/FeedCard';

export default gql`
  mutation createNeed($title: String!, $description: String!) {
    createNeed(title: $title, description: $description) {
      _id
      title
      description
      createdAt
      user {
        _id
        username
        firstName
        lastName
        email
        avatar
      }
    }
  }
`;
