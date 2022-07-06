import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "2019eb16-0817-4258-bdcb-a32b5b78bc88"
	} 
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
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

export const profileAPI = {
	getUserProfile(userId) {
		return instance.get(`profile/${userId}`)
				.then(response => response.data);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
				.then(response => response.data)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {status: status})
				.then(response => response.data) 
	},
	savePhoto(photo) {
		let formData = new FormData();
		formData.append("image", photo)
		return instance.put(`profile/photo`, formData)
				.then(response => response.data)
	},
	saveProfile(profileData) {
		return instance.put(`profile`, profileData)
				.then(response => response.data)
	}
}

export const authAPI = {
	getAuthUserData(){
		return instance.get(`auth/me`)		
				.then(response => response.data);
	},
	login(data){
		return instance.post(`auth/login`, data)
				.then(response => response.data)
	},
	logout(){
		return instance.delete(`auth/login`)
				.then(response => response.data)
	}
}

export const securityAPI = {
	getCaptchaUrl(){
		return instance.get(`/security/get-captcha-url`)		
				.then(response => response.data);
	},
}


