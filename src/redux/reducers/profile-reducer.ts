import { PhotosType, PostType, UsersDataType } from "./../../types/types";
import { profileAPI } from "../../api/api";

const ADD_POST = "profile/ADD_POST";
const DEL_POST = "profile/DEL_POST";
const ADD_LIKE = "profile/ADD_LIKE";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SWITCH_IS_FETCHING = "profile/SWITCH_IS_FETCHING";
const SET_STATUS = "profile/SET_STATUS";
const SET_PHOTO = "profile/SET_PHOTO";

let initialState = {
	usersData: null as UsersDataType | null,
	postData: [
		{
			id: 1,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sequi?",
			likesCount: 2,
			likesFlag: true,
		},
		{
			id: 2,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias ex necessitatibus numquam ducimus consectetur porro nobis magni fuga quia.",
			likesCount: 22,
			likesFlag: true,
		},
		{
			id: 3,
			text: "Hi",
			likesCount: 10,
			likesFlag: true,
		},
	] as Array<PostType>,
	isFetching: false,
	status: "",
};
export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case ADD_POST: {
			let len: number = state.postData.length + 1;
			return {
				...state,
				postData: [
					...state.postData,
					{ id: len, text: action.newPost, likesCount: 0, likesFlag: true },
				],
			};
		}
		case DEL_POST: {
			return {
				...state,
				postData: [...state.postData.filter((post) => post.id !== action.id)],
			};
		}
		case ADD_LIKE: {
			return {
				...state,
				postData: state.postData.map((post) => {
					if (post.id === action.id) {
						return post.likesFlag
							? { ...post, likesCount: ++post.likesCount, likesFlag: false }
							: { ...post, likesCount: --post.likesCount, likesFlag: true };
					}
					return post;
				}),
			};
		}
		case SWITCH_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				usersData: action.usersData,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		case SET_PHOTO: {
			return {
				...state,
				usersData: { ...state.usersData, photos: action.photo } as UsersDataType,
			};
		}

		default:
			return state;
	}
};

//Actions Creators:

type AddPostActionType = {
	type: typeof ADD_POST;
	newPost: string;
};
type DelPostActionType = {
	type: typeof DEL_POST;
	id: number;
};
type AddLikeActionType = {
	type: typeof ADD_LIKE;
	id: number;
};
type SetUserProfileActionType = {
	type: typeof SET_USER_PROFILE;
	usersData: any; //****************************************************** */
};
type SetFetchingActionType = {
	type: typeof SWITCH_IS_FETCHING;
	isFetching: boolean;
};
type SetStatusActionType = {
	type: typeof SET_STATUS;
	status: string;
};
type SetPhotoActionType = {
	type: typeof SET_PHOTO;
	photo: PhotosType;
};

export const addPost = (newPost: string): AddPostActionType => ({ type: ADD_POST, newPost });
export const delPost = (id: number): DelPostActionType => ({ type: DEL_POST, id });
export const addLike = (id: number): AddLikeActionType => ({ type: ADD_LIKE, id });
export const setUserProfile = (usersData: UsersDataType): SetUserProfileActionType => ({
	type: SET_USER_PROFILE,
	usersData,
});
export const setFetching = (isFetching: boolean): SetFetchingActionType => ({
	type: SWITCH_IS_FETCHING,
	isFetching,
});
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });
export const setPhoto = (photo: PhotosType): SetPhotoActionType => ({
	type: SET_PHOTO,
	photo,
});

//Thunk Creators:

export const getUserProfile = (userId: number) => async (dispatch: any) => {
	dispatch(setFetching(true));
	let data = await profileAPI.getUserProfile(userId);
	dispatch(setFetching(false));
	dispatch(setUserProfile(data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
	dispatch(setFetching(true));
	let data = await profileAPI.getStatus(userId);
	dispatch(setFetching(false));
	dispatch(setStatus(data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
	dispatch(setFetching(true));
	try {
		let data = await profileAPI.updateStatus(status);
		if (!data.resultCode) dispatch(setStatus(status));
	} catch (error) {
		alert(error);
	}
	dispatch(setFetching(false));
};

export const savePhoto = (photo: any) => async (dispatch: any) => {
	dispatch(setFetching(true));
	let data = await profileAPI.savePhoto(photo);
	if (!data.resultCode) dispatch(setPhoto(data.data.photos));
	dispatch(setFetching(false));
};

export const saveProfile =
	(profileData: UsersDataType, setStatus, setEditMode) =>
	async (dispatch: any, getState: any) => {
		const userId = getState().auth.userId;
		let data = await profileAPI.saveProfile(profileData);
		if (!data.resultCode) {
			dispatch(getUserProfile(userId));
			setEditMode(false);
		} else setStatus(data.messages[0]);
	};

export default profileReducer;
