'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PlayIcon from 'components/play'

const VideosList = ({ videos }) => (
  <Container>
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoThumb>
          <PlayIconStyled />
        </VideoThumb>
        <VideoTitle>{videos[id].title}</VideoTitle>
      </Video>
    ))}
  </Container>
)

const PlayIconStyled = styled(PlayIcon)`
  fill: #999;
  width: 50px;
  height: 50px;
  transition: all 200ms ease-in-out;
`

const Video = styled.section`
  cursor: pointer;

  &:hover ${PlayIconStyled} {
    transform: scale(1.5)
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;

  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
`

const VideoThumb = styled.div`
  border: 1px solid #999;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const VideoTitle = styled.h2`
  font-size: 18px;
`

const mapStateToProps = (state) => ({
  videos: state.videos
})

export default connect(mapStateToProps)(VideosList)
