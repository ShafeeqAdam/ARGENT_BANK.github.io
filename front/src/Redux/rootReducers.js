import { combineReducers } from "redux";
import authReducer from "./authReducers";
import userReducer from "./userReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;

/*fichier pour combiner les reducers */
