'use strict'

import React, { Component } from 'react'

import 'normalize.css'
import 'milligram'
// import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: 'My React App',
      Component: 'span'
    }
  }

  async componentDidMount () {
    // Dynamic import example - Another way to code splitting
    const title = await import('components/example')
    this.setState({
      Component: title.default
    })
  }

  render () {
    return (
      <this.state.Component>{this.state.title}</this.state.Component>
    )
  }
}

export default App
