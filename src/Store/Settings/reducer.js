
const INITIAL_STATE = {
    theme: 'light'
}

const Reducer = (state = INITIAL_STATE, action) => {
    const { payload } = action;

    switch(action.type){

        case 'settings/toggleTheme':

            return {
                ...state,
                theme: state.theme == 'light' ? 'dark' : 'light'
            }

        default:
            return state
    }
}

export default Reducer;