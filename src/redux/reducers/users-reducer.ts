import { AppStateType, InferActionsTypes } from "./../redux-store";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../../api/api";
import { UsersType } from "../../types/types";

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

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case "CHANGE_FOLLOW": {
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
		case "SET_USERS": {
			return { ...state, usersData: action.usersData };
		}
		case "SET_CURRENT_PAGE": {
			return { ...state, currentPage: action.currentPage };
		}
		case "SET_TOTAL_USERS_COUNT": {
			return { ...state, totalItemsCount: action.totalCount };
		}
		case "SWITCH_IS_FETCHING": {
			return { ...state, isFetching: action.isFetching };
		}
		case "SWITCH_IS_FOLLOWING_PROGRESS": {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId] //добавляем id в конец массива
					: state.followingInProgress.filter((id) => id !== action.userId), //удаляем ненужный уже id
			};
		}
		case "SCROLL_USERS": {
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

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
	changeFollow: (id: number) => ({ type: 'CHANGE_FOLLOW', id } as const),
	setUsers: (usersData: Array<UsersType>) => ({ type: 'SET_USERS', usersData } as const),
	setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
	setTotalUsersCount: (totalCount: number) =>
		({ type: 'SET_TOTAL_USERS_COUNT', totalCount } as const),
	setFetching: (isFetching: boolean) => ({ type: 'SWITCH_IS_FETCHING', isFetching } as const),
	setFollowingProgress: (isFetching: boolean, userId: number) =>
		({ type: 'SWITCH_IS_FOLLOWING_PROGRESS', isFetching, userId } as const),
	setBeginEndPage: (beginPage: number, endPage: number) =>
		({ type: 'SCROLL_USERS', beginPage, endPage } as const),
};

//Thunk Creators:

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getUsers =
	(currentPage: number, pageSize: number): ThunkType =>
	async (dispatch) => {
		dispatch(actions.setFetching(true));
		dispatch(actions.setCurrentPage(currentPage));
		let data = await usersAPI.getUsers(currentPage, pageSize);
		dispatch(actions.setFetching(false));
		dispatch(actions.setUsers(data.items));
		dispatch(actions.setTotalUsersCount(data.totalCount));
	};

export const changeFollowTC =
	(id: number, followed: boolean): ThunkType =>
	async (dispatch) => {
		dispatch(actions.setFollowingProgress(true, id));
		if (!followed) {
			let data = await usersAPI.follow(id);
			if (!data.resultCode) {
				dispatch(actions.changeFollow(id));
			}
		} else {
			let data = await usersAPI.unfollow(id);
			if (!data.resultCode) {
				dispatch(actions.changeFollow(id));
			}
		}
		dispatch(actions.setFollowingProgress(false, id));
	};

export default usersReducer;
