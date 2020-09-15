'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'styled-components'
import Header from 'components/header'
import Footer from 'components/footer'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import { headerHeight, footerHeight } from 'utils/constants'

import 'normalize.css'
import 'milligram'
// import './css/style.css'

const App = ({ isRegisterVideoOpened }) => (
  <Container>
    <Header />

    <Main>
      {isRegisterVideoOpened && <RegisterVideo />}
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer />
  </Container>
)

injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`

const Container = styled.div`
  height: 100%;
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const mapStateToProps = (state) => ({
  isRegisterVideoOpened: state.ui.isRegisterVideoOpened
})

export default connect(mapStateToProps)(App)
