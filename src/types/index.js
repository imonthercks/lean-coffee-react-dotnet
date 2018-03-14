// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { KanbanState, KanbanAction } from './kanban';

export type ReduxInitAction = { type: '@@INIT' };

export type State = {
    kanban: KanbanState
};

export type Action = ReduxInitAction | KanbanAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;