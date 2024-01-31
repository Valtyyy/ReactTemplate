import { combineReducers } from "redux";

import { reducer as crudReducer } from './CRUD';
import { reducer as authReducer  } from './Auth'
import { reducer as trackerReducer } from './RequestTracker';
import { reducer as settingsReducer } from './Settings';

const rootReducer = combineReducers({
    crud:  crudReducer,
    auth: authReducer,
    tracker: trackerReducer,
    settings: settingsReducer
})

export default rootReducer