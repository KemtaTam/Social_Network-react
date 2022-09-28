import { DefaultResponseType, instance } from "./api";
import { UsersType } from "../types/types";
import { FilterType } from "../redux/reducers/users-reducer";

type GetUsersResponseType = {
	items: Array<UsersType>;
	totalCount: number;
	error: string | null;
};
export const usersAPI = {
	getUsers(
		currentPage: number,
		pageSize: number,
		term: string = "",
		friend: null | boolean = null
	) {
		return instance
			.get<GetUsersResponseType>(
				`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null
					? ""
					: `&friend=${friend}`)
			)
			.then((response) => response.data);
	},
	follow(id: number) {
		return instance
			.post<DefaultResponseType>(`follow/${id}`, {})
			.then((response) => response.data);
	},
	unfollow(id: number) {
		return instance
			.delete<DefaultResponseType>(`follow/${id}`)
			.then((response) => response.data);
	},
};
