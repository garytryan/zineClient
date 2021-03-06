import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from 'app/reducers'
import reduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { createState } from '../constants/State'
import createLogger from 'redux-logger'


const initialState = createState()
const logger = createLogger({
  stateTransformer: state => state.toJS()
})

let middleware;

if (process.env.NODE_ENV === 'production') {
  middleware  = applyMiddleware(
    promiseMiddleware,
    reduxThunk
  )
} else {
  middleware  = applyMiddleware(
    promiseMiddleware,
    reduxThunk,
    logger
  )
}

export default createStore(rootReducer, initialState, middleware)
