// @flow

import React from 'react';

//import Todo from './Todo';

import type {Column} from '../types/kanban';
import './KanbanColumn.css';

export type Props = {
  column: Column
};

const KanbanColumn = ({ column }: Props) => (
  <div className='kanban-column'>
    <div className='kanban-column-header'>{column.name}</div>
    {column.topics.map((topic, index) => (
      <div key={topic.id} {...topic} className='kanban-topic'>
        <div className='kanban-topic-name'>{topic.name}</div>
        <div className='kanban-topic-description'>{topic.description}</div>
      </div>
    ))}
  </div>
);

export default KanbanColumn;