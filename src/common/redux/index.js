import {legacy_createStore as createStore} from 'redux'
import reducers  from './reducers'
// import { configureStore } from "@reduxjs/toolkit";

const store = createStore(reducers)

export default store