

export const SettingsActions = {

    ToggleTheme: (dispatch) => {

        dispatch({
            type: 'settings/toggleTheme'
        })
    },

    SetIsMobile: ({state}) => (dispatch) => {

        dispatch({
            type: 'settings/setIsMobile',
            payload: { state }
        })
    }
}