import React from 'react'
import Component from './component'
import { withApollo } from 'react-apollo'
import { REMOVE_TASK } from './../../graphql/mutations'

class Tasks extends React.Component {
  state = {
    tasks: []
  }

  remove = async (id) => {
    const response = await this.props.client.mutate({
      mutation: REMOVE_TASK(id)
    })

    const { loading, error } = response.data
    this.setState({loading, error})
  }

  render () {
    if (this.state.loading) {
      return <div>loading</div>
    }
    if (this.state.error) {
      return <div>erro</div>
    }

    return (
      <Component
        name={this.props.name}
        id={this.props.id}
        remove={this.remove}
      />
    )
  }
}

export default withApollo(Tasks)
