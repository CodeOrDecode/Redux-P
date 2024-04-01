import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { countreducer } from "./Countredux/countreducer";


let rootreducer = combineReducers({
    countone:countreducer
})

export const store = legacy_createStore(rootreducer)