import { DefaultResponseType, instance } from "./api";
import { LoginDataType } from "../types/auth-types";

type AuthUserDataResponseType = {
	id: number;
	email: string;
	login: string;
};
type LoginDataResponseType = {
	userId: number;
};

export const authAPI = {
	getAuthUserData() {
		return instance
			.get<DefaultResponseType<AuthUserDataResponseType>>(`auth/me`)
			.then((response) => response.data);
	},
	login(data: LoginDataType) {
		return instance
			.post<DefaultResponseType<LoginDataResponseType>>(`auth/login`, data)
			.then((response) => response.data);
	},
	logout() {
		return instance
			.delete<DefaultResponseType>(`auth/login`)
			.then((response) => response.data);
	},
};
