import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import authReducer from "./reducers/auth-reducer.ts";
import dialogsReducer from "./reducers/dialogs-reducer.ts";
import friendsReducer from "./reducers/friends-reducer.ts";
import profileReducer from "./reducers/profile-reducer.ts";
import usersReducer from "./reducers/users-reducer.ts";
import appReducer from "./reducers/app-reducer.ts";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogsReducer,
	friendsPage: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
 
window.store = store;

export default store;