import { usersAPI } from "../../api/api";
import { UsersType } from "../../types/types";

const CHANGE_FOLLOW = "users/CHANGE_FOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const SWITCH_IS_FETCHING = "users/SWITCH_IS_FETCHING";
const SWITCH_IS_FOLLOWING_PROGRESS = "users/SWITCH_IS_FOLLOWING_PROGRESS";
const SCROLL_USERS = "users/SCROLL_USERS";

let initialState = {
	usersData: [] as Array<UsersType>,
	pageSize: 5,
	totalItemsCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [] as Array<number>, //array of users id
	beginPage: 1,
	endPage: 10,
};
export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case CHANGE_FOLLOW: {
			return {
				...state,
				usersData: state.usersData.map((user) => {
					if (user.id === action.id) {
						return { ...user, followed: !user.followed };
					}
					return user;
				}),
			};
		}
		case SET_USERS: {
			return { ...state, usersData: action.usersData };
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage };
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalItemsCount: action.totalCount };
		}
		case SWITCH_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching };
		}
		case SWITCH_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId] //добавляем id в конец массива
					: state.followingInProgress.filter((id) => id !== action.userId), //удаляем ненужный уже id
			};
		}
		case SCROLL_USERS: {
			return {
				...state,
				beginPage: action.beginPage,
				endPage: action.endPage,
			};
		}

		default:
			return state;
	}
};

//Actions Creators:

type ChangeFollowActionType = {
	type: typeof CHANGE_FOLLOW;
	id: number;
};
type SetUsersActionType = {
	type: typeof SET_USERS;
	usersData: Array<UsersType>;
};
type SetCurrentPageActionType = {
	type: typeof SET_CURRENT_PAGE;
	currentPage: number;
};
type SetTotalUsersCountActionType = {
	type: typeof SET_TOTAL_USERS_COUNT;
	totalCount: number;
};
type SetFetchingActionType = {
	type: typeof SWITCH_IS_FETCHING;
	isFetching: boolean;
};
type SetFollowingProgressActionType = {
	type: typeof SWITCH_IS_FOLLOWING_PROGRESS;
	isFetching: boolean;
	userId: number;
};
type SetBeginEndPageActionType = {
	type: typeof SCROLL_USERS;
	beginPage: number;
	endPage: number;
};

export const changeFollow = (id: number): ChangeFollowActionType => ({
	type: CHANGE_FOLLOW,
	id: id,
});
export const setUsers = (usersData: Array<UsersType>): SetUsersActionType => ({
	type: SET_USERS,
	usersData,
});
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
	type: SET_CURRENT_PAGE,
	currentPage,
});
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({
	type: SET_TOTAL_USERS_COUNT,
	totalCount,
});
export const setFetching = (isFetching: boolean): SetFetchingActionType => ({
	type: SWITCH_IS_FETCHING,
	isFetching,
});
export const setFollowingProgress = (
	isFetching: boolean,
	userId: number
): SetFollowingProgressActionType => ({
	type: SWITCH_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId,
});
export const setBeginEndPage = (beginPage: number, endPage: number): SetBeginEndPageActionType => ({
	type: SCROLL_USERS,
	beginPage,
	endPage,
});

//Thunk Creators:

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
	dispatch(setFetching(true));
	dispatch(setCurrentPage(currentPage));
	let data = await usersAPI.getUsers(currentPage, pageSize);
	dispatch(setFetching(false));
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));
};

export const changeFollowTC = (id: number, followed: boolean) => async (dispatch: any) => {
	dispatch(setFollowingProgress(true, id));
	if (!followed) {
		let data = await usersAPI.follow(id);
		if (!data.resultCode) {
			dispatch(changeFollow(id));
		}
	} else {
		let data = await usersAPI.unfollow(id);
		if (!data.resultCode) {
			dispatch(changeFollow(id));
		}
	}
	dispatch(setFollowingProgress(false, id));
};

export default usersReducer;
