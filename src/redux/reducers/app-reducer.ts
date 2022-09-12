import { AppStateType } from "./../redux-store";
import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

export type InitialStateType = {
	initialized: boolean;
};

let initialState: InitialStateType = {
	initialized: false,
};

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
type ActionsType = InitializedSuccessActionType;

export const initializedSuccess = (): InitializedSuccessActionType => ({
	type: INITIALIZED_SUCCESS,
});

//Thunk Creators:
export const initializeApp =
	(): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
		await dispatch(getAuthUserData());
		dispatch(initializedSuccess());
	};

export default appReducer;
