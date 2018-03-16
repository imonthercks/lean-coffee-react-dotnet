// @flow
import type { KanbanState } from '../types/kanban';
import type { Action } from '../types';

export const CREATE_TOPIC = 'kanban/CREATE_TOPIC';
export const TOPIC_CREATED = 'kanban/TOPIC_CREATED';

const initialState : KanbanState = {
    columns: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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

    default:
      return state;
  }
};



