import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";

import authReducer from "./reducers/auth-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import friendsReducer from "./reducers/friends-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";
import appReducer from "./reducers/app-reducer";

let rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogsReducer,
	friendsPage: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

export type DefaultThunkType<AT extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, AT>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.store = store;

export default store;
