import React from 'react'
import Component from './component'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'

class NewTask extends React.Component {
  state = {
    name: ''
  }

  save = async () => {
    const response = await this.props.client.mutate({
      mutation: this.query()
    })

    const { loading, error } = response.data
    this.setState({loading, error})
  }

  query = () => gql`
    mutation {
      createTask(name: "${this.state.name}", done: false) {
        name
      }
    }
  `

  onChange = (e) => this.setState({name: e.target.value})

  render () {
    if (this.state.loading) {
      return <div>loading</div>
    }
    if (this.state.error) {
      return <div>erro</div>
    }
    console.log('this.state', this.state)
    return (
      <Component
        name={this.state.name}
        save={this.save}
        onChange={this.onChange}
      />
    )
  }
}

export default withApollo(NewTask)
