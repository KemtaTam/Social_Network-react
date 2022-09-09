import axios from "axios";
import { LoginDataType } from "../types/auth-types";
import { UsersDataType } from "./../types/types";
import { PhotosType, UsersType } from "../types/types";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "2019eb16-0817-4258-bdcb-a32b5b78bc88",
	},
});

export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
}
export enum ResultCodesEnumForCaptcha {
	CaptchaIsRequired = 10,
}

type DefaultResponseType = {
	data: any;
	resultCode: ResultCodesEnum;
	messages: Array<string>;
};

type GetUsersResponseType = {
	items: Array<UsersType>;
};
export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance
			.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data);
	},
	follow(id: number) {
		return instance.post<DefaultResponseType>(`follow/${id}`, {}).then((response) => response.data);
	},
	unfollow(id: number) {
		return instance.delete<DefaultResponseType>(`follow/${id}`).then((response) => response.data);
	},
};

type SavePhotoResponseType = {
	data: PhotosType;
	messages: Array<string>;
	resultCode: ResultCodesEnum;
};
export const profileAPI = {
	getUserProfile(userId: number) {
		return instance.get<UsersDataType>(`profile/${userId}`).then((response) => response.data);
	},
	getStatus(userId: number) {
		return instance.get<string>(`profile/status/${userId}`).then((response) => response.data);
	},
	updateStatus(status: string) {
		//**************************** */
		return instance
			.put<DefaultResponseType>(`profile/status`, { status: status })
			.then((response) => response.data);
	},
	savePhoto(photo: any) {
		let formData = new FormData();
		formData.append("image", photo);
		return instance
			.put<SavePhotoResponseType>(`profile/photo`, formData)
			.then((response) => response.data);
	},
	saveProfile(profileData: UsersDataType) {
		//**************************** */
		return instance
			.put<DefaultResponseType>(`profile`, profileData)
			.then((response) => response.data);
	},
};

type AuthUserDataResponseType = {
	data: {
		id: number;
		email: string;
		login: string;
	};
	resultCode: ResultCodesEnum;
	messages: Array<string>;
};
type LoginResponseType = {
	data: {
		userId: number;
	};
	resultCode: ResultCodesEnum;
	messages: Array<string>;
};

export const authAPI = {
	getAuthUserData() {
		return instance.get<AuthUserDataResponseType>(`auth/me`).then((response) => response.data);
	},
	login(data: LoginDataType) {
		return instance
			.post<LoginResponseType>(`auth/login`, data)
			.then((response) => response.data);
	},
	logout() {
		return instance.delete<DefaultResponseType>(`auth/login`).then((response) => response.data);
	},
};

type GetCaptchaUrlResponseType = {
	url: string;
};
export const securityAPI = {
	getCaptchaUrl() {
		return instance
			.get<GetCaptchaUrlResponseType>(`/security/get-captcha-url`)
			.then((response) => response.data);
	},
};
