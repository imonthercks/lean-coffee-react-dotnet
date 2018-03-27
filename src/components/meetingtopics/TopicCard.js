// @flow

import React from 'react';

import type {Topic} from '../../types/kanban';

export type Props = {
  topic: Topic,
  index: number
};

const TopicCard = ({ topic, index }: Props) => (
    <div key={topic.id} {...topic} className='kanban-topic'>
        <div className='kanban-topic-name'>{topic.name}</div>
        <div className='kanban-topic-description'>{topic.description}</div>
    </div>
);

export default TopicCard;