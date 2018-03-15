// @flow

import React from 'react';

//import Todo from './Todo';

import type { KanbanColumns, ColumnId } from '../types/kanban';
import './KanbanCanvas.css';

export type Props = {
  columns: KanbanColumns,
  onColumnClick: (id: ColumnId) => void
};

const getGridStyle = (index) => {
  return {
    gridColumn: (index + 1) + '/' + (index + 1)};
} 

const KanbanCanvas = ({ columns, onColumnClick }: Props) => (
  <div className='kanban-canvas'>
    {columns.map((column, index) => (
      <div key={column.id} {...column} onClick={() => onColumnClick(column.id)} className='kanban-column' style={getGridStyle(index)}>
        {column.name}
      </div>
    ))}
  </div>
);

export default KanbanCanvas;