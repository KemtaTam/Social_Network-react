import { DefaultResponseType, instance } from "./api";
import { PhotosType, ProfileDataType } from "./../types/types";

export const profileAPI = {
	getUserProfile(userId: number | null) {
		return instance.get<ProfileDataType>(`profile/${userId}`).then((response) => response.data);
	},
	getStatus(userId: number) {
		return instance.get<string>(`profile/status/${userId}`).then((response) => response.data);
	},
	updateStatus(status: string) {
		return instance
			.put<DefaultResponseType>(`profile/status`, { status: status })
			.then((response) => response.data);
	},
	savePhoto(photo: File) {
		let formData = new FormData();
		formData.append("image", photo);

		return instance
			.put<DefaultResponseType<PhotosType>>(`profile/photo`, formData)
			.then((response) => response.data);
	},
	saveProfile(profileData: ProfileDataType) {
		return instance
			.put<DefaultResponseType>(`profile`, profileData)
			.then((response) => response.data);
	},
};
