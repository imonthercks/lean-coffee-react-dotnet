// @flow

export type TopicId = string;
export type TopicName = string;

export type ColumnId = number;

export type KanbanColumn = {
    id: ColumnId
};

export type KanbanColumns = Array<KanbanColumn>;
export type KanbanState = {
  columns: KanbanColumns,
  topicBeingCreated: boolean
};

export type KanbanAction =
  | { type: 'kanban/CREATE_TOPIC', id: TopicId, name: TopicName }
  | { type: 'kanban/TOPIC_CREATED', id: TopicId };
