import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me($username: String!) {
    me(username: $username) {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks:{
            bookId: String
            authors: [String]
            description: String
            title: String
            image: String
            link: String
        }
    }
  }
`;
