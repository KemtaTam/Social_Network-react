import { authAPI } from "../../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isFetching: false,	//????????????

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
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
//Thunk Creators:
export const getAuthUserData = () => {
	return (dispatch) => {
		authAPI.getAuthUserData().then(data => {
			if(!data.resultCode) {
				let {id, login, email} = data.data;
				dispatch(setAuthUserData(id, email, login));
			}
		});
	}
}
export const login = (userData) => {		//???????????????
	authAPI.login(userData).then(data => {
		if(!data.resultCode) {
			alert('зашел')
		}
	});
}  
export const logout = () => {		//???????????????
	authAPI.logout().then(data => {
		if(!data.resultCode) {
			alert('вышел')
		}
	});
}  

export default authReducer;