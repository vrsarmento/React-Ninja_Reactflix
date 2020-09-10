'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'

import 'normalize.css'
import 'milligram'
// import './css/style.css'

const App = () => (
  <Container>
    <Header>
      <HeaderTitle>Reactflix</HeaderTitle>
      <RegisterButton>Cadastrar vídeo</RegisterButton>
    </Header>

    <Main>
      <RegisterVideo />
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer>
      &copy; 2020
    </Footer>

  </Container>
)

injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`

const headerHeight = '60px'
const footerHeight = '30px'

const Container = styled.div`
  height: 100%;
`

const Header = styled.header`
  height: ${headerHeight};
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

const HeaderTitle = styled.h1`
  color: #fff;
  font-weight: bolder;
  margin-bottom: 0;
`

const RegisterButton = styled.button`
  margin-bottom: 0;
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
`

export default App
