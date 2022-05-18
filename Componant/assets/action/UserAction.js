import axios from "axios"

export const onUserLogin = ({ email, password }) => {

    return async (dispatch) => {
        try {
            const responce = await axios.post("https://netflix-example.herokuapp.com/user/mock-login", {
                email,
                password
            })
            dispatch({
                type: "DO_LOGIN",
                payload: responce.data
            })
        } catch (error) {
            dispatch({
                type: "ON_LOGIN",
                payload: error
            })
        }
    }

}
//next api========
export const onFetchProducet = () => {

    return async (dispatch) => {
        try {
            const responce = {
                data: [
                    { name: "macbook-pro", price: "Ru40000" },
                    { name: "Hp", price: "Ru7000" },
                    { name: "Lenovo", price: "Ru3000" },
                ]
            }
            dispatch({
                type: "FETCH_PRODUCT",
                payload: responce.data
            })
        } catch (error) {
            dispatch({
                type: "FETCH_PRODUCT",
                payload: error
            })
        }
    }

}