// @flow

export type TopicId = string;
export type TopicName = string;

export type Topic = {
  id: TopicId,
  name: TopicName,
  description: string
};

export type Topics = Array<Topic>;

export type TopicStartPosition = {
  columnId: string,
  verticalIndex: number
};

export type TopicEndPosition = {
  columnId: ?string,
  verticalIndex: number
};

export type ColumnId = string;
export type TopicRef = {
  id: TopicId
}
export type TopicRefs = Array<TopicRef>

export type Column = {
    id: ColumnId,
    name: string,
    topics : TopicRefs
};

export type Columns = Array<Column>;
export type KanbanState = {
  topics: Topics,
  columns: Columns,
  topicBeingUpdated: boolean
};

export type KanbanAction =
  | { type: 'kanban/CREATE_TOPIC', name: TopicName, description: string }
  | { type: 'kanban/TOPIC_CREATED', id: TopicId }
  | { type: 'kanban/EDIT_TOPIC', topic: Topic }
  | { type: 'kanban/TOPIC_UPDATED', id: TopicId }
  | { type: 'kanban/MOVE_TOPIC', from: TopicStartPosition, to: TopicEndPosition};
