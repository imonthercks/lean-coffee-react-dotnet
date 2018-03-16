// @flow

import React from 'react';

import type {Column} from '../types/kanban';
import { Droppable } from 'react-beautiful-dnd';
import KanbanTopic from './KanbanTopic';

import './KanbanColumn.css';

export type Props = {
  column: Column
};

const KanbanColumn = ({ column }: Props) => (
  <div className='kanban-column'>
    <div className='kanban-column-header'>{column.name}</div>
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} className='kanban-topic-container'>
          {column.topics.map((topic, index) => (
            <KanbanTopic topic={topic} index={index} />
          ))}
        </div>
      )}
    </Droppable>
  </div>
);

export default KanbanColumn;