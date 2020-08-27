'use strict'

import React from 'react'
import styled from 'styled-components'

const VideoSingle = () => (
  <Container>
    <Iframe width='560' height='480' src='https://www.youtube-nocookie.com/embed/oNLJ2IUObV4' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
    <Title>Título do Vídeo</Title>
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Iframe = styled.iframe`
  background: #000;
  border: 0;
  border-bottom: 1px solid #999;
  width: 100%;
`

const Title = styled.h2`
  padding: 10px;
`

export default VideoSingle
