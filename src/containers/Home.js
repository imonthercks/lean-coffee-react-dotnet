// @flow

import React from 'react'
import { Link } from 'react-router-dom'

const HomeContainer = () => (
  <div>
    <h1><Link to="/meetingtopics">Topics</Link></h1>
    <h1><Link to="/meeting">Meeting</Link></h1>
  </div>
)

export default HomeContainer;