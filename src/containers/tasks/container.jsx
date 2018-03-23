import React from 'react'
import Component from './component'
import { withApollo } from 'react-apollo'
import { GET_TASKS } from './../../constants/querys'

class Tasks extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount = async () => {
    const response = await this.props.client.query({
      query: GET_TASKS
    })

    const { loading, error, tasks } = response.data
    this.setState({loading, error, tasks})
  }

  render () {
    if (this.state.loading) {
      return <div>loading</div>
    }
    if (this.state.error) {
      return <div>erro</div>
    }

    return (
      <Component tasks={this.state.tasks} />
    )
  }
}

export default withApollo(Tasks)
