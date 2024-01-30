

const INITTIAL_STATE = {}

// sub store

const Reducer = (state = INITTIAL_STATE, action) => {
    const { payload } = action;


    switch(action.type) {

        case 'tracker/pending':
        console.log('key => ', payload.key);

        return {
            ...state,
            [payload.key]: 'pending'
        }


    case 'tracker/success':
        console.log('key => ', payload.key)

        return {
            ...state,
            [payload.key]: 'success'
        }


    case 'tracker/failed':
        console.log('key => ', payload.key)

        return {
            ...state,
            [payload.key]: 'failed'
        }


    default:
        return state;
    }
}

export default Reducer;