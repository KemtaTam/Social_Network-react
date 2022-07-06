import { authAPI, securityAPI } from "../../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
}

const authReducer = (state=initialState, action) => {
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
}

//Actions Creators:
export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA, 
	payload: {userId, email, login, isAuth}
})
export const setCaptcha = (url) => ({type: SET_CAPTCHA, url})
//Thunk Creators:
export const getAuthUserData = () => async (dispatch) => {
	const data = await authAPI.getAuthUserData();
	if (!data.resultCode) {
		let { id, login, email } = data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
}
export const login = (userData, setStatus) => async (dispatch) => {
	const data = await authAPI.login(userData);
	if(!data.resultCode) dispatch(getAuthUserData())
	else {
		setStatus(data.messages);
		if (data.resultCode === 10) dispatch(getCaptchaUrl());
	}
}
export const logout = () => async (dispatch) => {
	const data = await authAPI.logout()
	if(!data.resultCode){
		dispatch(setAuthUserData(null, null, null, false));
	} 
};
export const getCaptchaUrl = () => async (dispatch) => {
	const data = await securityAPI.getCaptchaUrl();
	dispatch(setCaptcha(data.url));
}

export default authReducer;