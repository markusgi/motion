
const initialState = {
    token: null,
    user: [],
    post: [],
};

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case "USER_LOGIN":
            const newState =  { ...state };
            newState.token = action.payload;
            return newState;
        default:
            return state;
    };
};