'use strict'

import React from 'react'
import styled from 'styled-components'
import { footerHeight } from 'utils/constants'

const MainFooter = () => (
  <Footer>&copy; 2020</Footer>
)

const Footer = styled.footer`
  background: #333;
  color: #fff;
  height: ${footerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default MainFooter
