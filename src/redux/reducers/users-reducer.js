const CHANGE_FOLLOW = 'CHANGE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SWITCH_IS_FETCHING = 'SWITCH-IS-FETCHING';
const SWITCH_IS_FOLLOWING_PROGRESS = 'SWITCH-IS-FOLLOWING-PROGRESS';

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
						return {...user, isFollow : !user.isFollow}
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

export const changeFollow = (id) => ({type: CHANGE_FOLLOW, id: id})
export const setUsers = (usersData) => ({type: SET_USERS, usersData})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setFetching = (isFetching) => ({type: SWITCH_IS_FETCHING, isFetching})
export const setFollowingProgress = (isFetching, userId) => ({type: SWITCH_IS_FOLLOWING_PROGRESS, isFetching, userId})

export default usersReducer;