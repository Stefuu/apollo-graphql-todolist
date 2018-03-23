import React from 'react'
import Component from './component'
import { withApollo } from 'react-apollo'
import { REMOVE_TASK, UPDATE_TASK } from './../../graphql/mutations'

class Task extends React.Component {
  state = {
    name: this.props.name,
    editing: false
  }

  remove = async () => {
    const response = await this.props.client.mutate({
      mutation: REMOVE_TASK(this.props.id)
    })

    const { loading, error } = response.data
    this.setState({loading, error})
  }

  save = async () => {
    const response = await this.props.client.mutate({
      mutation: UPDATE_TASK(this.props.id)
    })

    const { loading, error } = response.data
    this.setState({loading, error}, () => this.toggleEdit())
  }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

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
        editing={this.state.editing}
        toggleEdit={this.toggleEdit}
        save={this.save}
      />
    )
  }
}

export default withApollo(Task)
