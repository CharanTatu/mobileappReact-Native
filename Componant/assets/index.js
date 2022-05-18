export * from './action/UserAction'
export * from './reducer/RootReducer'
export * from './reducer/UserReducer'
export * from './store'

// import { combineReducers, applyMiddleware, } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'

// import axios from "axios"
// import thunk from 'redux-thunk'

// //action
// export const onUserLogin = ({ email, password }) => {

//     return async (dispatch) => {
//         try {
//             const responce = await axios.post("https://netflix-example.herokuapp.com/user/mock-login", {
//                 email,
//                 password
//             })
//             dispatch({
//                 type: "DO_LOGIN",
//                 payload: responce.data
//             })
//         } catch (error) {
//             dispatch({
//                 type: "ON_LOGIN",
//                 payload: error
//             })
//         }
//     }

// }
// //next api========
// export const onFetchProducet = () => {

//     return async (dispatch) => {
//         try {
//             const responce = {
//                 data: [
//                     {
//                         name: "ram", price: "Ru400",
//                         name: "sham", price: "Ru7000",
//                         name: "jadu", price: "Ru3000"
//                     }
//                 ]
//             }
//             dispatch({
//                 type: "FETCH_PRODUCT",
//                 payload: responce.data
//             })
//         } catch (error) {
//             dispatch({
//                 type: "FETCH_PRODUCT",
//                 payload: error
//             })
//         }
//     }

// }

// //reducer
// export const userReducer = (state = {}, action) => {
//     switch (action.type) {
//         case "DO_LOGIN":
//             return {
//                 ...state,
//                 user: action.payload
//             };
//         case "FETCH_PRODUCT":
//             return {
//                 ...state,
//                 product: action.payload
//             };
//         case "ON_ERROR":
//             return {
//                 ...state,
//                 appError: action.payload
//             };
//         default:
//             return state;
//     }

// }


// //root reducer
// export const rootReducer = combineReducers({
//     userReducer,
// });



//store
// export const store = configureStore(
//     { reducer: rootReducer },
//     applyMiddleware(thunk))

