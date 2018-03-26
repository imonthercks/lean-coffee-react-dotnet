// @flow

import React from 'react';

import type { Topic, TopicId, TopicName } from '../types/kanban'

import './TopicForm.css';

type Props = {
  topic: Topic,
  onSubmitTopic: (topic: Topic) => void
};

type State = {
  id: TopicId,
  name: TopicName,
  description: string
}

class TopicForm extends React.Component<Props, State>{

  state = {
    name: "",
    description: ""
  }

  handleInputChange = (event: SyntheticEvent<KeyboardEvent>) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event: SyntheticEvent<Event>) => {
    event.preventDefault();
    this.props.onSubmitTopic({
      name: this.state.name,
      description: this.state.description
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Topic Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
           Topic Description:
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleInputChange} />
          </label>
        </div>
        <div><button type="submit">Submit</button></div>
      </form>
    </div>
    )
  }
}

export default TopicForm;