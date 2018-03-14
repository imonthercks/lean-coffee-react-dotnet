// @flow
import type { KanbanState } from '../types/kanban';
import type { Action } from '../types';

export const CREATE_TOPIC = 'kanban/CREATE_TOPIC';
export const TOPIC_CREATED = 'kanban/TOPIC_CREATED';

const initialState : KanbanState = {
    columns: [
      {
        id: 1,
        name: "ToDo"
      }
    ],
    topicBeingCreated: false
};

export default (state : KanbanState = initialState, action : Action) => {
  switch (action.type) {
    case CREATE_TOPIC:
      return {
        ...state,
        topicBeingCreated: true
      };

    case TOPIC_CREATED:
      return {
        ...state,
        topicBeingCreated: false
      };

    default:
      return state;
  }
};



