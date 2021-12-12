const initialState = {
    loginState: false //Whether user is logged or not.
};

const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_STATE':
            return { ...state, loginState: action.payload.loginState}
            break; 

        default:
    };
    return state;
};

export default LoginReducer;