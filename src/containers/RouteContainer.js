// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import KanbanBoard from './KanbanBoard'
import MeetingTopics from './MeetingTopics'
import Home from './Home'

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch)

const RouteContainer = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={Home} />
    <Route exact path="/meetingtopics" component={MeetingTopics} />
    <Route path="/meeting" component={KanbanBoard} />
  </ConnectedSwitch>
)

export default RouteContainer;