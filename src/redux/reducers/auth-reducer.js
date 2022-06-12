import { headerAPI } from "../../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
	userid: null,
	email: null,
	login: null,

	isAuth: false
}

const authReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: 
			return {
				...state,
				...action.data,
				isAuth: true
			};

		default:
			return state;
	}
}

//Actions Creators:
export const setAuthUserData = (userId, email, login) => ({
	type: SET_USER_DATA, 
	data: {userId, email, login}
})
//Thunk Creators:
export const getAuthUserData = () => {
	return (dispatch) => {
		headerAPI.getAuthUserData().then(data => {
			if(!data.resultCode) {
				let {id, login, email} = data.data;
				dispatch(setAuthUserData(id, email, login));
			}
		});
	}
}  

export default authReducer;