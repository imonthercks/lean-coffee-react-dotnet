// @flow
import type { KanbanState, Columns } from '../types/kanban';
import type { Action } from '../types';

export const CREATE_TOPIC = 'kanban/CREATE_TOPIC';
export const TOPIC_CREATED = 'kanban/TOPIC_CREATED';
export const MOVE_TOPIC = 'kanban/MOVE_TOPIC';
export const TOPIC_MOVED = 'kanban/TOPIC_MOVED';

const initialState : KanbanState = {
    columns: [
      {
        id: "1",
        name: "To Discuss",
        topics: [
          {
            id: 'a',
            name: 'test',
            description: 'test description'
          },
          {
            id: 'b',
            name: 'test2',
            description: 'test description2'
          },
          {
            id: 'c',
            name: 'test3',
            description: 'test description3'
          }
        ]
      },
      {
        id: "2",
        name: "Discussing",
        topics: [
          {
            id: 'd',
            name: 'test4',
            description: 'test description4'
          }
        ]
      },
      {
        id: "3",
        name: "Done",
        topics: [
          {
            id: 'e',
            name: 'test5',
            description: 'test description5'
          }
        ]
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
    case MOVE_TOPIC:
      let newColumns = (Array : Columns).from(state.columns);
      const fromPosition = action.from;
      const toPosition = action.to;
      const fromColumn = newColumns.find(column => column.id === fromPosition.columnId);
      const toColumn = newColumns.find(column => column.id === toPosition.columnId);

      const [movingTopic] = fromColumn.topics.splice(action.from.verticalIndex, 1);
      toColumn.topics.splice(action.to.verticalIndex, 0, movingTopic)

      return {
        ...state,
        columns: newColumns
      };
    default:
      return state;
  }
};



