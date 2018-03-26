// @flow

import { connect } from 'react-redux';
import { createTopic, editTopic } from '../actions/kanban'

import TopicManager from '../components/meetingtopics/TopicManager'
import type { State, Dispatch,  } from '../types';

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
    // onMoveTopic: (location: DropResult) => {
    //   let destinationColumnId = (location.destination == null ? null : location.destination.droppableId);
    //   let destinationVerticalId = (location.destination == null ? -1 : location.destination.index);
    
    //   dispatch(moveTopic({ 
    //       columnId: location.source.droppableId, 
    //       verticalIndex: location.source.index
    //     },
    //     { 
    //       columnId: destinationColumnId, 
    //       verticalIndex: destinationVerticalId
    //     }
    //   ));
    // }
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TopicManager);