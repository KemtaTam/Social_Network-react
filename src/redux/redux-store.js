import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducers/dialogs-reducer";
import friendsReducer from "./reducers/friends-reducer";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogsReducer,
	friendPage: friendsReducer
});
let store = createStore(reducers);

window.store = store;

export default store;