// @flow
import type { KanbanState, Columns, Column } from '../types/kanban';
import type { Action } from '../types';

export const CREATE_TOPIC = 'kanban/CREATE_TOPIC';
export const TOPIC_CREATED = 'kanban/TOPIC_CREATED';
export const EDIT_TOPIC = 'kanban/EDIT_TOPIC';
export const TOPIC_UPDATED = 'kanban/TOPIC_UPDATED';
export const MOVE_TOPIC = 'kanban/MOVE_TOPIC';
export const TOPIC_MOVED = 'kanban/TOPIC_MOVED';

const initialState : KanbanState = {
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
      },
      {
        id: 'd',
        name: 'test4',
        description: 'test description4'
      },
      {
        id: 'e',
        name: 'test5',
        description: 'test description5'
      }
    ],
    columns: [
      {
        id: "toDiscuss",
        name: "To Discuss",
        topics: [
          {
            id: 'a'
          },
          {
            id: 'b'
          },
          {
            id: 'c'          
          }
        ]
      },
      {
        id: "discussing",
        name: "Discussing",
        topics: [
          {
            id: 'd'
          }
        ]
      },
      {
        id: "done",
        name: "Done",
        topics: [
          {
            id: 'e'
          }
        ]
      }
    ],
    topicBeingUpdated: false
};

const ID = () => {
  let array = new Uint32Array(8)
  window.crypto.getRandomValues(array)
  let str = ''
  for (let i = 0; i < array.length; i++) {
    str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4)
  }
  return str
}

export default (state : KanbanState = initialState, action : Action) => {
  switch (action.type) {
    case CREATE_TOPIC:
      const newId = ID();
      let result = {
        ...state,
        topics: [...state.topics, {id: newId, name: action.name, description: action.description}],
        topicBeingUpdated: true
      };

      let column = result.columns.find((item) => item.id === "toDiscuss")
      if (column != null)
        column.topics.push({id: newId})
      
      return result;
    case TOPIC_CREATED:
      return {
        ...state,
        topicBeingUpdated: false
      };
    case EDIT_TOPIC:
      let editResult = {
        ...state,
        topicBeingUpdated: true
      };

      if (action.topic == null)
        return editResult;

      let oldTopic = action.topic;
      let topic = editResult.topics.find((item) => item.id === oldTopic.id);

      if (topic != null){
        topic.name = oldTopic.name;
        topic.description = oldTopic.description;
      }

      return editResult;
    case TOPIC_UPDATED:
      return {
        ...state,
        topicBeingUpdated: false
      };
    case MOVE_TOPIC:
      let newColumns = (Array.from(state.columns) : Columns);
      const fromPosition = action.from;
      const toPosition = action.to;
      const fromColumn = (newColumns.find(column => column.id === fromPosition.columnId) : ?Column);
      const toColumn = (newColumns.find(column => column.id === toPosition.columnId) : ?Column);

      if (fromColumn == null || toColumn == null)
        return state;

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



