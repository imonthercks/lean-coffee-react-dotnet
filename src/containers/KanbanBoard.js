// @flow

import { connect } from 'react-redux';

//import { createTopic } from '../actions/kanban';
// import { visibleTodosSelector } from '../selectors';
import KanbanCanvas from '../components/KanbanCanvas';

import type { State, Dispatch } from '../types';

const mapStateToProps = (state: State) => {
  return {
    columns: state.kanban.columns
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onColumnClick: id => {
      //dispatch(toggleTodo(id));
    }
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(KanbanCanvas);