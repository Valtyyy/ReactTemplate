import { createSelector } from "reselect"


const selectSettings = (state) => state.settings;

export const themeModeSelector = createSelector(
    [selectSettings],
    (e) => {
        return e.theme;
    }
)

export const isMobileSelector = createSelector(
    [selectSettings],
    (e) => {
        return e.isMobile
    }
)