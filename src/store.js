import {combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import progressfullscren from "./state/progressfullscren";

import {createStore} from 'redux'


const reducer = combineReducers({
    progressfullscren

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
)