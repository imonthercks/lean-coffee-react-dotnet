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
  onColumnClick: (id: ColumnId) => void,
  onMoveTopic: (location: DropResult) => void
};

const getGridStyle = (index) => {
  return {
    gridColumn: (index + 1) + '/' + (index + 1)};
} 

// const onDragEnd = (result) => {
//   if (!result.destination) {
//     return;
//   }

//   console.log(result);
//   let destinationColumnId = (result.destination == null ? null : result.destination.droppableId);
//   let destinationVerticalId = (result.destination == null ? null : result.destination.index);

//   moveTopic({ 
//       columnId: result.source.droppableId, 
//       verticalIndex: result.source.index
//     },
//     { 
//       columnId: destinationColumnId, 
//       verticalIndex: destinationVerticalId
//     }
//   );
//   // const items = reorder(
//   //   this.state.items,
//   //   result.source.index,
//   //   result.destination.index
//   // );

//   // this.setState({
//   //   items,
//   // });
// }

const KanbanCanvas = ({ columns, onColumnClick, onMoveTopic }: Props) => (
  <DragDropContext onDragEnd={onMoveTopic}>
  <div className='kanban-canvas'>
    {columns.map((column, index) => (
      <div key={column.id} {...column} onClick={() => onColumnClick(column.id)} className='kanban-column-container' style={getGridStyle(index)}>
        <KanbanColumn column={column} />
      </div>
    ))}
  </div>
  </DragDropContext>
);

export default KanbanCanvas;