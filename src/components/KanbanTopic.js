// @flow

import React from 'react';

import type {Topic} from '../types/kanban';
import { Draggable } from 'react-beautiful-dnd';

import './KanbanTopic.css';

export type Props = {
  topic: Topic,
  index: number
};

const KanbanTopic = ({ topic, index }: Props) => (
    <Draggable key={topic.id} draggableId={topic.id} index={index}>
        {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={topic.id} {...topic} className='kanban-topic'>
                <div className='kanban-topic-name'>{topic.name}</div>
                <div className='kanban-topic-description'>{topic.description}</div>
            </div>
        )}
    </Draggable>
);

export default KanbanTopic;