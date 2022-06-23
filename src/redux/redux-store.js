import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import authReducer from "./reducers/auth-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import friendsReducer from "./reducers/friends-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";
import appReducer from "./reducers/app-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogsReducer,
	friendsPage: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
 
window.store = store;

export default store;