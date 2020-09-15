'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { registerVideo } from 'reducers/videos/action-creators'
import { closeRegisterVideo } from 'reducers/ui/action-creators'

const RegisterVideo = ({ onSubmit, onCloseRegisterVideo }) => (
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar vídeo</h2>

    <label htmlFor='id'>ID do vídeo:</label>
    <input type='text' name='id' id='id' />

    <label htmlFor='title'>Título do vídeo</label>
    <input type='text' name='title' id='title' />

    <button type='submit'>Cadastrar</button>
    <ButtonClose type='button' onClick={onCloseRegisterVideo}>&times;</ButtonClose>
  </Form>
)

const Form = styled.form`
  padding: 10px;
  position: relative;
`

const ButtonClose = styled.button`
  font-size: 18px;
  position: absolute;
  right: 10px;
  top: 10px;
  margin: 0;
  padding: 0;
  width: 30px;
  height: 30px;
  line-height: 1;
  border-radius: 50%;
`

const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist() // avoiding React to set event to 'null' after usage

    const {
      id: { value: id },
      title: { value: title }
    } = e.target
    await dispatch(registerVideo({ id, title }))
    e.target.reset()
    e.target[0].focus()
  },

  onCloseRegisterVideo: () => dispatch(closeRegisterVideo())
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
