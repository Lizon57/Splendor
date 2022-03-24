import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

import { gameReducer } from './reducers/game-reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const rootReducer = combineReducers({
    gameModule: gameReducer
})


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk))) //Passing the reducer