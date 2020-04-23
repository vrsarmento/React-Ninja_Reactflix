'use strict'

import React, { Component } from 'react'
import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: 'My React App'
    }
  }

  render () {
    return (
    <div>{this.state.title}</div>
    )
  }
}

export default App
