import { DefaultThunkType, InferActionsTypes } from "./../redux-store";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

let initialState = {
	initialized: false,
};
export type InitialStateType = typeof initialState;

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
type ActionsType = InferActionsTypes<typeof actions>;

export const actions = {
	initializedSuccess: () => ({ type: INITIALIZED_SUCCESS } as const),
};

//Thunk Creators:
type ThunkType = DefaultThunkType<ActionsType>;

export const initializeApp = (): ThunkType => async (dispatch) => {
	await dispatch(getAuthUserData());
	dispatch(actions.initializedSuccess());
};

export default appReducer;
