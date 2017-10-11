import { gql } from 'react-apollo';

export default gql`
  mutation signup(
    $email: String!,
    $password: String!,
    $fullName: String!,
    $username: String! ,
    $avatar: String
  ) {

    signup(
      email: $email,
      password: $password,
      fullName: $fullName,
      username: $username,
      avatar: $avatar
    ) {
      token
    }
  }
`;
