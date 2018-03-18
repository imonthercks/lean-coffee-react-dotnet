// @flow

import kanban from './kanban'
import type { State, Action } from '../types'

export default function kanbanApp(state: ?State, action: Action): State {
  const s = state || {}
  return {
    kanban: kanban(s.kanban, action)
  }
}