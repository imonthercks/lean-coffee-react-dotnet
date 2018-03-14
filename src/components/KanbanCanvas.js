// @flow

import React from 'react';

//import Todo from './Todo';

import type { KanbanColumns, ColumnId } from '../types/kanban';

export type Props = {
  columns: KanbanColumns,
  onColumnClick: (id: ColumnId) => void
};

const KanbanCanvas = ({ columns, onColumnClick }: Props) => (
  <ul>
    {columns.map(column => (
      <div key={column.id} {...column} onClick={() => onColumnClick(column.id)}>
        {column.id}
      </div>
    ))}
  </ul>
);

export default KanbanCanvas;