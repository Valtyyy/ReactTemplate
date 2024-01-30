import { combineReducers } from "redux";

import { reducer as crudReducer } from './CRUD';
import { reducer as authReducer  } from './Auth'
import { reducer as trackerReducer } from './RequestTracker';

const rootReducer = combineReducers({
    crud:  crudReducer,
    auth: authReducer,
    tracker: trackerReducer
})

export default rootReducer