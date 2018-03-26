// @flow

import React from 'react';

//import Todo from './Todo';

import type { Columns, ColumnId } from '../types/kanban';
import { DragDropContext } from 'react-beautiful-dnd';
import KanbanColumn from './KanbanColumn';
import type { DropResult } from 'react-beautiful-dnd';
import './KanbanCanvas.css';

export type Props = {
  columns: Columns,
  topics: Topics,
  onColumnClick: (id: ColumnId) => void,
  onMoveTopic: (location: DropResult) => void
};

const getGridStyle = (index) => {
  
  return {
    gridColumn: (index + 1) + '/' + (index + 1)};
} 

const KanbanCanvas = ({ columns, topics, onColumnClick, onMoveTopic }: Props) => (
  <DragDropContext onDragEnd={onMoveTopic}>
  <div className='kanban-canvas'>
    {columns.map((column, index) => (
      <div key={column.id} {...column} onClick={() => onColumnClick(column.id)} className='kanban-column-container' style={getGridStyle(index)}>
        <KanbanColumn column={column} topics={topics} />
      </div>
    ))}
  </div>
  </DragDropContext>
);

export default KanbanCanvas;