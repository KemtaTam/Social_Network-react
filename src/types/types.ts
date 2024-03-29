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
	small: string | null;
	large: string | null;
};
export type ProfileDataType = {
	userId: number;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	contacts: ContactsType;
	photos: PhotosType;
	aboutMe: string;
};

export type UsersType = {
	id: number;
	name: string;
	status: string;
	photos: PhotosType;
	followed: boolean;
};

