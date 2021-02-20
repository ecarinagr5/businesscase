import { createStore, combineReducers, compose , applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //promises

import ipcReducer from './ipcData'
import gitReducer from './getDataGit'
import setVisualization from './changeVisualization'

const rootReducer  = combineReducers({
    metrics: ipcReducer,
    setVisualization,
    datagit: gitReducer
})

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ))
    return store;
}