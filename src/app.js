'use strict'

import React, { Component } from 'react'
import Example from 'components/example'
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
    <Example>{this.state.title}</Example>
    )
  }
}

export default App
