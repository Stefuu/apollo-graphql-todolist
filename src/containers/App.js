import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Tasks from './../containers/tasks'
import NewTask from './../containers/newTask'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

class App extends Component {
  state = {
    tasks: []
  }

  render () {
    return (
      <ApolloProvider client={client}>
        <div>
          <Tasks />
          <NewTask />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
