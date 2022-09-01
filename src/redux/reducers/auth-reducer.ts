import { authAPI, securityAPI } from "../../api/api";

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

const authReducer = (state = initialState, action): InitialStateType => {
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

type SetAuthUserDataActionPayloadType = {
	userId: number | null;
	email: string | null;
	login: string | null;
	isAuth: boolean;
};
type SetAuthUserDataActionType = {
	type: typeof SET_USER_DATA;
	payload: SetAuthUserDataActionPayloadType;
};
export const setAuthUserData = (
	userId: null | number,
	email: null | string,
	login: null | string,
	isAuth: boolean
): SetAuthUserDataActionType => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth },
});

type SetCaptchaActionType = {
	type: typeof SET_CAPTCHA;
	url: string | null;
};
export const setCaptcha = (url: string): SetCaptchaActionType => ({ type: SET_CAPTCHA, url });

//Thunk Creators:
export const getAuthUserData = () => async (dispatch) => {
	const data = await authAPI.getAuthUserData();
	if (!data.resultCode) {
		let { id, login, email } = data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
};
export const login = (userData: object, setStatus: Function) => async (dispatch) => {
	//********************************************************** */
	const data = await authAPI.login(userData);
	if (!data.resultCode) dispatch(getAuthUserData());
	else {
		setStatus(data.messages);
		if (data.resultCode === 10) dispatch(getCaptchaUrl());
	}
};
export const logout = () => async (dispatch) => {
	const data = await authAPI.logout();
	if (!data.resultCode) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};
export const getCaptchaUrl = () => async (dispatch) => {
	const data = await securityAPI.getCaptchaUrl();
	dispatch(setCaptcha(data.url));
};

export default authReducer;
