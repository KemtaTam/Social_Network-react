import { authAPI } from "../../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
	userId: null,
	email: null,
	login: null,

	isAuth: false
}

const authReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: 
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
}

//Actions Creators:
export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA, 
	payload: {userId, email, login, isAuth}
})
//Thunk Creators:
export const getAuthUserData = () => 
	async (dispatch) => {
		const data = await authAPI.getAuthUserData();
		if (!data.resultCode) {
			let { id, login, email } = data.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
	}
export const login = (userData, setStatus) => 
	async (dispatch) => {
		const data = await authAPI.login(userData);
		if(!data.resultCode) dispatch(getAuthUserData())
		else setStatus(data.messages)
	}
export const logout = () => 
	async (dispatch) => {
		const data = await authAPI.logout()
		if(!data.resultCode){
			dispatch(setAuthUserData(null, null, null, false));
		} 
	};

export default authReducer;