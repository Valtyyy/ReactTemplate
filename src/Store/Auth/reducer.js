
const INITTIAL_STATE = {
    isLogged: false,
    loading: false,
    success: false,
    current: {}
}

const Reducer = (state = INITTIAL_STATE, action) => {

    switch(action.type){

        case 'auth/success':
            return{
                success: true,
                loading: false,
                isLogged: true,
                current: action.payload
            };

        case 'auth/pending':
            return{
                ...state,
                loading: true,
                success: false,
            };

        // auth failed, logout
        case 'auth/delete':
            return INITTIAL_STATE;

        default:
            return state
    }
}

export default Reducer;