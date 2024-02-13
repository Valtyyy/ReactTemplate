
const INITIAL_STATE = {
    theme: 'light',
    isMobile: false
}

const Reducer = (state = INITIAL_STATE, action) => {
    const { payload } = action;

    switch(action.type){

        case 'settings/toggleTheme':

            return {
                ...state,
                theme: state.theme == 'light' ? 'dark' : 'light'
            }

        case 'settings/setIsMobile':

            return {
                ...state,
                isMobile: payload.state
            }

        default:
            return state
    }
}

export default Reducer;