// @flow

import React from 'react';
import TopicCard from './TopicCard'
import TopicForm from './TopicForm'
import type { Topics, Topic } from '../../types/kanban'

import './TopicManager.css';

type Props = {
  topics: Topics,
  onEditTopic: (topic: Topic) => void
};

type State = {
  mode: string
};

class TopicManager extends React.Component<Props, State>{
  state = {
    mode: "View"
  }

  showAddForm = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState(prevState => ({
      mode: "Add",
    }));
  }

  addTopic = (topic: Topic) => {
    this.props.onEditTopic(topic);

    this.setState(prevState => ({
      mode: "View",
    }));
  }

  cancel = () => {
    this.setState(prevState => ({
      mode: "View",
    }))
  }

  render(){

    const isAdding = this.state.mode === "Add";
    
    const topicForm = isAdding ? (
      <TopicForm topic={null} onSubmitTopic={this.addTopic} onCancel={this.cancel}/>
    ) : (
      <div><button onClick={this.showAddForm}>Add Topic</button></div>
    );

    return (
    <div>
      {topicForm}
      <div className='kanban-column'>
        <div className='kanban-column-header'>Topics</div>
          <div className='kanban-topic-container'>
            {this.props.topics.map((topic, index) => (
              <TopicCard key={topic.id} topic={topic} index={index} />
            ))}
          </div>
      </div>
    </div>)
  }
}

export default TopicManager;