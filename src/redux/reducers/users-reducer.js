import { usersAPI } from "../../api/api";

const CHANGE_FOLLOW = 'users/CHANGE_FOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const SWITCH_IS_FETCHING = 'users/SWITCH_IS_FETCHING';
const SWITCH_IS_FOLLOWING_PROGRESS = 'users/SWITCH_IS_FOLLOWING_PROGRESS';

let initialState = {
	usersData: [
	],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
}

const usersReducer = (state=initialState, action) => {
	switch (action.type) {

		case CHANGE_FOLLOW: {
			return {
				...state, 
				usersData: state.usersData.map(user => {
					if(user.id === action.id){
						return {...user, followed : !user.followed}
					}
					return user;
				})
			}
		}
		case SET_USERS: {
			return {
				...state, 
				usersData: action.usersData
			}	
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.totalCount
			}
		}
		case SWITCH_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		case SWITCH_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching 
					? [...state.followingInProgress, action.userId]	//добавляем id в конец массива
					: state.followingInProgress.filter(id => id !== action.userId)	//удаляем ненужный уже id
			}
		}

		default:
			return state;
	}
}

//Actions Creators:
export const changeFollow = (id) => ({type: CHANGE_FOLLOW, id: id})
export const setUsers = (usersData) => ({type: SET_USERS, usersData})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setFetching = (isFetching) => ({type: SWITCH_IS_FETCHING, isFetching})
export const setFollowingProgress = (isFetching, userId) => ({type: SWITCH_IS_FOLLOWING_PROGRESS, isFetching, userId})
//Thunk Creators:
export const getUsers = (currentPage, pageSize) => 
	async (dispatch) => {
		dispatch(setFetching(true));
		dispatch(setCurrentPage(currentPage));
		let data = await usersAPI.getUsers(currentPage, pageSize)
		dispatch(setFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
	}
 
export const changeFollowTC = (id, followed) => 
	async (dispatch) => {
		dispatch(setFollowingProgress(true, id));
		if(!followed) {
			let data = await usersAPI.follow(id);
			if(!data.resultCode){
				dispatch(changeFollow(id));
			}
		} 
		else {
			let data = await usersAPI.unfollow(id)
			if(!data.resultCode){
				dispatch(changeFollow(id));
			}
		}
		dispatch(setFollowingProgress(false, id));
	}

export default usersReducer;