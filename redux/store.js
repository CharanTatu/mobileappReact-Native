import { configureStore } from '@reduxjs/toolkit'
import CreateReducer from './reducer/CreateReducer'
export default configureStore({

    reducer: {
        counter: CreateReducer
    }

})