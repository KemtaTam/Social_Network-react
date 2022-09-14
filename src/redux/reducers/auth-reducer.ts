import { DefaultThunkType, InferActionsTypes } from "./../redux-store";

import { LoginDataType } from "./../../types/auth-types";
import { authAPI } from "./../../api/auth-api";
import { securityAPI } from "./../../api/security-api";
import { ResultCodesEnum } from "../../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_CAPTCHA = "auth/SET_CAPTCHA";

let initialState = {
	userId: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false,
	captchaUrl: null as string | null,
};
export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload,
			};
		}
		case SET_CAPTCHA: {
			return {
				...state,
				captchaUrl: action.url,
			};
		}

		default:
			return state;
	}
};

//Actions Creators:

export const actions = {
	setAuthUserData: (
		userId: number | null,
		email: string | null,
		login: string | null,
		isAuth: boolean
	) =>
		({
			type: SET_USER_DATA,
			payload: { userId, email, login, isAuth },
		} as const),

	setCaptcha: (url: string) => ({ type: SET_CAPTCHA, url } as const),
};
type ActionsType = InferActionsTypes<typeof actions>;

//Thunk Creators:

type ThunkType = DefaultThunkType<ActionsType>;

export const getAuthUserData = (): ThunkType => async (dispatch) => {
	const data = await authAPI.getAuthUserData();
	if (data.resultCode === ResultCodesEnum.Success) {
		const { id, login, email } = data.data;
		dispatch(actions.setAuthUserData(id, email, login, true));
	}
};
export const login =
	(userData: LoginDataType, setStatus: (status: string[]) => void): ThunkType =>
	async (dispatch) => {
		const data = await authAPI.login(userData);
		if (data.resultCode === ResultCodesEnum.Success) dispatch(getAuthUserData());
		else {
			setStatus(data.messages);
			if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) dispatch(getCaptchaUrl());
		}
	};
export const logout = (): ThunkType => async (dispatch) => {
	const data = await authAPI.logout();
	if (data.resultCode === ResultCodesEnum.Success) {
		dispatch(actions.setAuthUserData(null, null, null, false));
	}
};
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
	const data = await securityAPI.getCaptchaUrl();
	dispatch(actions.setCaptcha(data.url));
};

export default authReducer;
