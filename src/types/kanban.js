// @flow

export type TopicId = string;
export type TopicName = string;

export type Topic = {
  id: TopicId,
  name: TopicName,
  description: string
};

export type Topics = Array<Topic>;
export type ColumnId = number;

export type Column = {
    id: ColumnId,
    name: string,
    topics : Topics
};

export type Columns = Array<Column>;
export type KanbanState = {
  columns: Columns,
  topicBeingCreated: boolean
};

export type KanbanAction =
  | { type: 'kanban/CREATE_TOPIC', id: TopicId, name: TopicName }
  | { type: 'kanban/TOPIC_CREATED', id: TopicId };
