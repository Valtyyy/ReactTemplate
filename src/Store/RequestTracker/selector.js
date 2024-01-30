import { createSelector } from "reselect"

const selectTracker = (state) => state.tracker;

export const keySelector = (keyName) => createSelector(
    [selectTracker],
    (tracker) => {
        
        return tracker[keyName]
    }
)