import { gql } from '@apollo/client'

export const DELETE_BLOG = gql`
  mutation DeleteBlog($input: BlogInput) {
    DeleteBlog(input: $input)
  }
`
