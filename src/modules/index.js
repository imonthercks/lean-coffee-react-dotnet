// @flow

import kanban from './kanban'
import type { State, Action } from '../types'

export default function todoApp(state: ?State, action: Action): State {
  const s = state || {}
  return {
    kanban: kanban(s.kanban, action)
  }
}
// import { combineReducers } from 'redux';
// import kanban from './kanban';

// export default combineReducers({
//   kanban
// });