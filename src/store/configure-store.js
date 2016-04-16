import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import * as rootReducer from '../reducers'

const initialState = {}

function configureStore(history, initialState) {

  const reducer = combineReducers({
    ...rootReducer,
    routing: routerReducer
  })

  const loggerMiddleware = createLogger()

  const enchancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerMiddleware(history)
    )
  )

  const store = createStore(reducer, initialState, enchancer)

  return store

}

export default configureStore
