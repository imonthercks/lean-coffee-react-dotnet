// @flow

import type { TopicId, TopicName, TopicStartPosition, TopicEndPosition, KanbanAction } from '../types/kanban';

export const createTopic = (id: TopicId, name: TopicName): KanbanAction => {
    return {
        type: 'kanban/CREATE_TOPIC',
        id,
        name
    };
};

export const moveTopic = (from: TopicStartPosition, to: TopicEndPosition): KanbanAction => {
    return {
        type: 'kanban/MOVE_TOPIC',
        from,
        to
    };
};