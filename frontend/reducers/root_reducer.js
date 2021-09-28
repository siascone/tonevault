import { combineReducers } from "redux";
import errorsReducer from "./errors_reducer";
import sessionsReducer from "./sessions_reducer";
import uiReducer from "./ui_reducer";

const rootReducer = combineReducers({
    session: sessionsReducer,
    errors: errorsReducer,
    ui: uiReducer
});

export default rootReducer