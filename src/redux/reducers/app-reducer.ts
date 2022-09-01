import { getAuthUserData } from "./auth-reducer.ts"; //?????????????????????????????

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

export type InitialStateType = {
	initialized: boolean;
};

let initialState: InitialStateType = {
	initialized: false,
};

const appReducer = (state = initialState, action): InitialStateType => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			};

		default:
			return state;
	}
};

//Actions Creators:
type InitializedSuccessActionType = {
	type: typeof INITIALIZED_SUCCESS;
};
export const initializedSuccess = (): InitializedSuccessActionType => ({
	type: INITIALIZED_SUCCESS,
});

//Thunk Creators:
export const initializeApp = () => async (dispatch) => {
	await dispatch(getAuthUserData());
	dispatch(initializedSuccess());
};

export default appReducer;
