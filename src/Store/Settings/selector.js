import { createSelector } from "reselect"


const selectSettings = (state) => state.settings;

export const themeModeSelector = createSelector(
    [selectSettings],
    (e) => {
        return e.themeMode;
    }
)