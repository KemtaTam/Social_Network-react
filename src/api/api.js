import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "b5eebff0-62ad-4095-9c20-addf2dd71dda"
	} 
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
				.then(response => response.data);
	},
	getUserProfile(userId) {
		return instance.get(`profile/${userId}`)
				.then(response => response.data);
	},
	follow(id) {
		return instance.post(`follow/${id}`, {})
				.then(response => response.data);
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`)
				.then(response => response.data);
	}	
}
