'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'styled-components'
import Header from 'components/header'
import Footer from 'components/footer'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import { headerHeight, footerHeight } from 'utils/constants'
import { fetchVideos } from 'reducers/videos/action-creators'

import 'normalize.css'
import 'milligram'
// import './css/style.css'

class App extends PureComponent {
  componentDidMount () {
    this.props.fetchVideos()
  }

  render () {
    const { isRegisterVideoOpened, videoSingleId, videos } = this.props

    return (
      <Container>
        <Header />

        <Main>
          {isRegisterVideoOpened && <RegisterVideo />}
          {videoSingleId && <VideoSingle id={videoSingleId} title={videos[videoSingleId].title} />}
          <VideosList />
        </Main>

        <Footer />
      </Container>
    )
  }
}

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
  isRegisterVideoOpened: state.ui.isRegisterVideoOpened,
  videoSingleId: state.videoSingle,
  videos: state.videos
})

const mapDispatchToProps = {
  fetchVideos
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
