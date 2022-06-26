import { gql } from "@apollo/client";
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = qql`
mutation saveBook($bookdetail:bookInput){
saveBook(bookdetail:$bookdetail){
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}}`;
export const REMOVE_BOOK = qql`
mutation removeBook( $bookId: ID)
{removeBook( bookId: $bookId){
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}}`;
