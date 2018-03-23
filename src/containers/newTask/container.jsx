import React from 'react'
import Component from './component'
import { withApollo } from 'react-apollo'
import { CREATE_TASK } from './../../graphql/mutations'

class NewTask extends React.Component {
  state = {
    name: ''
  }

  save = async () => {
    const response = await this.props.client.mutate({
      mutation: CREATE_TASK(this.state.name)
    })

    const { loading, error } = response.data
    this.setState({loading, error})
  }

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
