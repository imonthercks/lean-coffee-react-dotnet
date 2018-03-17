// @flow

import { connect } from 'react-redux';

import KanbanCanvas from '../components/KanbanCanvas';
import { moveTopic } from '../actions/kanban'

import type { State, Dispatch,  } from '../types';
import type { DropResult } from 'react-beautiful-dnd';

const mapStateToProps = (state: State) => {
  return {
    columns: state.kanban.columns
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onColumnClick: id => {
      //dispatch(toggleTodo(id));
    },
    onMoveTopic: (location: DropResult) => {
      let destinationColumnId = (location.destination == null ? null : location.destination.droppableId);
      let destinationVerticalId = (location.destination == null ? -1 : location.destination.index);
    
      dispatch(moveTopic({ 
          columnId: location.source.droppableId, 
          verticalIndex: location.source.index
        },
        { 
          columnId: destinationColumnId, 
          verticalIndex: destinationVerticalId
        }
      ));
    }
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(KanbanCanvas);