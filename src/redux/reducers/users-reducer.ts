import { DefaultThunkType, InferActionsTypes } from "./../redux-store";
import { usersAPI } from "./../../api/users-api";
import { UsersType } from "../../types/types";

let initialState = {
	usersData: [] as Array<UsersType>,
	pageSize: 5,
	totalItemsCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [] as Array<number>, //array of users id
	filter: {
		term: "",
		friend: null as null | boolean,
	},
};
export type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case "users/CHANGE_FOLLOW": {
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

		case "users/SET_USERS": {
			return { ...state, usersData: action.usersData };
		}
		case "users/SET_CURRENT_PAGE": {
			return { ...state, currentPage: action.currentPage };
		}
		case "users/SET_TOTAL_USERS_COUNT": {
			return { ...state, totalItemsCount: action.totalCount };
		}
		case "users/SET_FILTER": {
			return { ...state, filter: action.payload };
		}
		case "users/SWITCH_IS_FETCHING": {
			return { ...state, isFetching: action.isFetching };
		}
		case "users/SWITCH_IS_FOLLOWING_PROGRESS": {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId] //добавляем id в конец массива
					: state.followingInProgress.filter((id) => id !== action.userId), //удаляем ненужный уже id
			};
		}

		default:
			return state;
	}
};

//Actions Creators:

export const actions = {
	changeFollow: (id: number) => ({ type: "users/CHANGE_FOLLOW", id } as const),
	setUsers: (usersData: Array<UsersType>) => ({ type: "users/SET_USERS", usersData } as const),
	setCurrentPage: (currentPage: number) =>
		({ type: "users/SET_CURRENT_PAGE", currentPage } as const),
	setTotalUsersCount: (totalCount: number) =>
		({ type: "users/SET_TOTAL_USERS_COUNT", totalCount } as const),
	setFetching: (isFetching: boolean) =>
		({ type: "users/SWITCH_IS_FETCHING", isFetching } as const),
	setFollowingProgress: (isFetching: boolean, userId: number) =>
		({ type: "users/SWITCH_IS_FOLLOWING_PROGRESS", isFetching, userId } as const),
	setBeginEndPage: (beginPage: number, endPage: number) =>
		({ type: "users/SCROLL_USERS", beginPage, endPage } as const),
	setFilter: (filter: FilterType) => ({ type: "users/SET_FILTER", payload: filter } as const),
};

type ActionsTypes = InferActionsTypes<typeof actions>;

//Thunk Creators:

type ThunkType = DefaultThunkType<ActionsTypes>;

export const getUsers =
	(currentPage: number, pageSize: number, filter: FilterType): ThunkType =>
	async (dispatch) => {
		dispatch(actions.setFetching(true));
		dispatch(actions.setCurrentPage(currentPage));
		dispatch(actions.setFilter(filter));

		let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend);
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
