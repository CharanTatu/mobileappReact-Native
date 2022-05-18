import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { rootReducer } from './reducer/RootReducer'
export const store = configureStore({
    reducer: rootReducer
}, applyMiddleware(thunk))