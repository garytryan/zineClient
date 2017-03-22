import { createPostModal } from 'app/constants/UI/PostModal'
import { handleActions } from 'redux-actions'

const initialState = createPostModal()


export const postModalReducer = handleActions({
  "UI:POST_MODAL:TOGGLE": (state, action) =>
    state.merge({
      shouldDisplay: !state.shouldDisplay,
      transition: action.payload.transition
    }),

  "UI:POST_MODAL:HIDE": (state, action) =>
    state.merge({
      shouldDisplay: false,
      transition: action.payload.transition
    })
}, initialState)
