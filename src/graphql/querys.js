import gql from 'graphql-tag'

export const GET_TASKS = () => {
  return gql`
        query {
            tasks {
                id
                name
                done
            }
        }
    `
}
