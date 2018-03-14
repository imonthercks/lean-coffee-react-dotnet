// @flow

import type { TopicId, TopicName, KanbanAction } from '../types/kanban';

export const createTopic = (id: TopicId, name: TopicName): KanbanAction => {
    return {
        type: 'kanban/CREATE_TOPIC',
        id,
        name
    };
};

//   return dispatch => {
//     dispatch({
//         type: CREATE_TOPIC,
//         id,
//         name
//       });
  
//       return setTimeout(() => {
//         dispatch({
//           type: TOPIC_CREATED,
//           id
//         });
//       }, 3000);
//     };