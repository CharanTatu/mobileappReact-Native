import axios from "axios"

export const onUserLogin = ({ email, password }) => {

    return async (dispatch) => {
        try {
            const responce = await axios.post("base_url", {
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