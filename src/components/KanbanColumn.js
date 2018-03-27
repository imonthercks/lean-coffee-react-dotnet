// @flow

import React from 'react';

import type {Column, Topics, Topic, TopicId} from '../types/kanban';
import { Droppable } from 'react-beautiful-dnd';
import KanbanTopic from './KanbanTopic';

import './KanbanColumn.css';

export type Props = {
  column: Column,
  topics: Topics
};

const getTopic = (topics: Topics, id: TopicId): Topic => {
  let topic = topics.find((item) => item.id === id);
  return topic || {id: "", name: "", description: ""};
}

const KanbanColumn = ({ column, topics }: Props) => (
  <div className='kanban-column'>
    <div className='kanban-column-header'>{column.name}</div>
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} className='kanban-topic-container'>
          {column.topics.map((topic, index) => (
            <KanbanTopic key={topic.id} topic={getTopic(topics, topic.id)} index={index} />
          ))}
        </div>
      )}
    </Droppable>
  </div>
);

export default KanbanColumn;