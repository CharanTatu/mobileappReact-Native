export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "DO_LOGIN":
            return {
                ...state,
                user: action.payload
            };
        case "FETCH_PRODUCT":
            return {
                ...state,
                product: action.payload
            };
        case "ON_ERROR":
            return {
                ...state,
                appError: action.payload
            };
        default:
            return state;
    }

}