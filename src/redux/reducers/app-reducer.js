import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
	initialized: false,
}

const appReducer = (state=initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS: 
			return {
				...state,
				initialized: true
			};

		default:
			return state;
	}
}

//Actions Creators:
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
//Thunk Creators:
export const initializeApp = () => async (dispatch) => {
	await dispatch(getAuthUserData())
	dispatch(initializedSuccess())

	let promise1, promise2 = 1
	Promise.all([promise1, promise2]).then(() => dispatch(initializedSuccess()))
} 

export default appReducer;

