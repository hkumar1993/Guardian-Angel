import { gql } from 'react-apollo';

export default gql`
  {
    me {
      _id
      email
      avatar
      username
      firstName
      lastName
    }
  }
`;
