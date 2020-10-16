import React from "react"
import Home from "./Home"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducers} from "../redux/rootReducer"

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));

const Index = () => {
  return (
    <Provider store={store}>
    <Home />
    </Provider>
  )
}

export default Index
