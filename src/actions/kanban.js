// @flow

import type { Topic, TopicName, TopicStartPosition, TopicEndPosition, KanbanAction } from '../types/kanban';

export const createTopic = (name: TopicName, description: string): KanbanAction => {
    return {
        type: 'kanban/CREATE_TOPIC',
        name,
        description
    };
};

export const editTopic = (topic: Topic): KanbanAction => {
    return {
        type: 'kanban/EDIT_TOPIC',
        topic
    };
};

export const moveTopic = (from: TopicStartPosition, to: TopicEndPosition): KanbanAction => {
    return {
        type: 'kanban/MOVE_TOPIC',
        from,
        to
    };
};