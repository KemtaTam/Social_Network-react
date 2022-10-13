import { ThunkAction } from "redux-thunk";

import { AppStateType, InferActionsTypes } from "./../redux-store";
import { profileAPI } from "./../../api/profile-api";
import { ResultCodesEnum } from "../../api/api";
import { PhotosType, PostType, ProfileDataType } from "./../../types/types";

const ADD_POST = "profile/ADD_POST";
const DEL_POST = "profile/DEL_POST";
const ADD_LIKE = "profile/ADD_LIKE";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SWITCH_IS_FETCHING = "profile/SWITCH_IS_FETCHING";
const SET_STATUS = "profile/SET_STATUS";
const SET_PHOTO = "profile/SET_PHOTO";

let initialState = {
	usersData: null as ProfileDataType | null,
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

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
				usersData: { ...state.usersData, photos: action.photo } as ProfileDataType,
			};
		}

		default:
			return state;
	}
};

//Actions Creators:

export const actions = {
	addPost: (newPost: string) => ({ type: ADD_POST, newPost } as const),
	delPost: (id: number) => ({ type: DEL_POST, id } as const),
	addLike: (id: number) => ({ type: ADD_LIKE, id } as const),
	setUserProfile: (usersData: ProfileDataType) =>
		({ type: SET_USER_PROFILE, usersData } as const),
	setFetching: (isFetching: boolean) => ({ type: SWITCH_IS_FETCHING, isFetching } as const),
	setStatus: (status: string) => ({ type: SET_STATUS, status } as const),
	setPhoto: (photo: PhotosType) => ({ type: SET_PHOTO, photo } as const),
};

type ActionsType = InferActionsTypes<typeof actions>;

//Thunk Creators:

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export const getUserProfile =
	(userId: number): ThunkType =>
	async (dispatch) => {
		dispatch(actions.setFetching(true));
		let data = await profileAPI.getUserProfile(userId);
		dispatch(actions.setFetching(false));
		dispatch(actions.setUserProfile(data));
	};
export const getStatus =
	(userId: number): ThunkType =>
	async (dispatch) => {
		dispatch(actions.setFetching(true));
		let data: string = await profileAPI.getStatus(userId);
		dispatch(actions.setFetching(false));
		dispatch(actions.setStatus(data));
	};
export const updateStatus =
	(status: string): ThunkType =>
	async (dispatch) => {
		dispatch(actions.setFetching(true));
		try {
			let data = await profileAPI.updateStatus(status);
			if (data.resultCode === ResultCodesEnum.Success) dispatch(actions.setStatus(status));
		} catch (error) {
			alert(error);
		}
		dispatch(actions.setFetching(false));
	};
export const savePhoto =
	(photo: File): ThunkType =>
	async (dispatch) => {
		dispatch(actions.setFetching(true));
		let data = await profileAPI.savePhoto(photo);
		if (data.resultCode === ResultCodesEnum.Success) dispatch(actions.setPhoto(data.data));
		dispatch(actions.setFetching(false));
	};
export const saveProfile =
	(
		profileData: ProfileDataType,
		setStatus: (status: string) => void,
		setEditMode: (editMode: boolean) => void
	): ThunkType =>
	async (dispatch, getState) => {
		const userId = getState().auth.userId;

		let data = await profileAPI.saveProfile(profileData);
		if (data.resultCode === ResultCodesEnum.Success) {
			if(userId) dispatch(getUserProfile(userId));
			else throw new Error("userId can't be null")
			setEditMode(false);
		} else setStatus(data.messages[0]);
	};

export default profileReducer;
