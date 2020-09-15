'use strict'

import createReducer from '../create-reducer'
import { OPEN_REGISTER_VIDEO, CLOSE_REGISTER_VIDEO } from './actions'

const initialState = {
  isRegisterVideoOpened: false
}

const ui = createReducer(initialState, {
  [OPEN_REGISTER_VIDEO]: (state) => ({
    ...state,
    isRegisterVideoOpened: true
  }),

  [CLOSE_REGISTER_VIDEO]: (state) => ({
    ...state,
    isRegisterVideoOpened: false
  })
})

export default ui
