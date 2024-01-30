import { useDispatch } from "react-redux";
import { createSelector } from "reselect";

const selectCrud = (state) => state.crud;

export const selectEntityKEY = (entityType, key) => createSelector(
    [selectCrud],
    (e) => {
  
        return e[entityType][key];
      }
);