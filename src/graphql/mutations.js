import gql from 'graphql-tag'

export const CREATE_TASK = (name) => {
  return gql`
        mutation {
            createTask(name: "${name}", done: false) {
                name
            }
        }
    `
}

export const REMOVE_TASK = (id) => {
  return gql`
        mutation {
            deleteTask(id: "${id}")
        }
    `
}

export const UPDATE_TASK = (id, done, name) => {
  return gql`
        mutation {
            updateTask(id: "${id}", done: ${done}, name: "${name}"){
                name
            }
        }
    `
}
