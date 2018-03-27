// @flow

import React from 'react';
import TopicCard from './TopicCard'
import TopicForm from './TopicForm'
import type { Topics, Topic, TopicId } from '../../types/kanban'

import './TopicManager.css';

type Props = {
  topics: Topics,
  onEditTopic: (topic: Topic) => void,
  onBackToHome: () => void
};

type State = {
  mode: string,
  selectedTopicId: TopicId
};

class TopicManager extends React.Component<Props, State>{
  state = {
    mode: "View",
    selectedTopicId: ""
  }

  showAddForm = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState(prevState => ({
      mode: "Add",
    }));
  }

  updateTopic = (topic: Topic) => {
    this.props.onEditTopic(topic);

    this.setState(prevState => ({
      mode: "View",
    }));
  }

  showEditForm = (topic: Topic) => {
    this.setState(prevState => ({
      selectedTopicId: topic.id,
      mode: "Edit",
    }))
  }

  cancel = () => {
    this.setState(prevState => ({
      mode: "View",
    }))
  }

  isSelected = (topic: Topic) : boolean => {
    return this.state.selectedTopicId === topic.id;
  }

  render(){

    let topicForm = (
      <div>There was an issue rendering the control bar for this screen</div>
    );

    switch (this.state.mode){
      case "Add":
        topicForm = (
          <TopicForm topic={null} onSubmitTopic={this.updateTopic} onCancel={this.cancel}/>
        )
        break;
      case "Edit":
        topicForm = (
          <TopicForm topic={this.props.topics.find((item) => item.id === this.state.selectedTopicId)} onSubmitTopic={this.updateTopic} onCancel={this.cancel}/>
        )
        break;
      default:
        topicForm = (
          <div><button onClick={this.showAddForm}>Add Topic</button><button onClick={this.props.onBackToHome}>Back to Home</button></div>
        )
        break;
    }

    return (
    <div>
      {topicForm}
      <div className='kanban-column'>
        <div className='kanban-column-header'>Topics</div>
          <div className='kanban-topic-container'>
            {this.props.topics.map((topic, index) => (
              <TopicCard key={topic.id} topic={topic} index={index} selected={this.isSelected(topic)} onEdit={this.showEditForm} />
            ))}
          </div>
      </div>
    </div>)
  }
}

export default TopicManager;