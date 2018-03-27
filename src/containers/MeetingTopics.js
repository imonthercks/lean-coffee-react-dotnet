// @flow

import { connect } from 'react-redux';
import { createTopic, editTopic } from '../actions/kanban'

import TopicManager from '../components/meetingtopics/TopicManager'
import type { State, Dispatch,  } from '../types';
import type { Topic } from '../types/kanban'

const mapStateToProps = (state: State) => {
  return {
    topics: state.kanban.topics
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onEditTopic: (topic: Topic) => {
      if (!topic.id){
          dispatch(createTopic(topic.name, topic.description))
      }
      else
      {
          dispatch(editTopic(topic))
      }
    }
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TopicManager);