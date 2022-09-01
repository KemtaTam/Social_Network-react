export type PostType = {
	id: number;
	text: string;
	likesCount: number;
	likesFlag: boolean;
};
export type ContactsType = {
	github: string;
	vk: string;
	facebook: string;
	instagram: string;
	twitter: string;
	website: string;
	youtube: string;
	mainLink: string;
};
export type PhotosType = {
	small: string;
	large: string;
};
export type UsersDataType = {
	userId: number;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	contacts: ContactsType;
	photos: PhotosType;
};

export type UsersType = {
	id: number;
	name: string;
	status: string;
	photos: PhotosType;
	followed: boolean;
};