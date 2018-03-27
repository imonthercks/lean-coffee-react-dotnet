// @flow

import React from 'react';

import type { Topic, TopicId, TopicName } from '../../types/kanban'

import './TopicForm.css';

type Props = {
  topic: ?Topic,
  onSubmitTopic: (topic: Topic) => void,
  onCancel: () => void
};

type State = {
  id: TopicId,
  name: TopicName,
  description: string
}

class TopicForm extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props)

    if (props.topic == null) {
      this.state = {
        id: "",
        name: "",
        description: ""
      }
    }
    else {
      this.state = {
        id: props.topic.id,
        name: props.topic.name,
        description: props.topic.description
      }
    }
  }

  handleInputChange = (event: Event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
  }

  handleSubmit = (event: Event) => {
    event.preventDefault();
    this.props.onSubmitTopic({
      id: this.state.id,
      name: this.state.name,
      description: this.state.description
    })
  }

  cancel = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.onCancel();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="hidden" name="id" value={this.state.id} />
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
          <div><button type="submit">Submit</button> <button onClick={this.cancel}>Cancel</button></div>
        </form>
      </div>
    )
  }
}

export default TopicForm;