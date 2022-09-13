import axios from "axios";

export const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "2019eb16-0817-4258-bdcb-a32b5b78bc88",
	},
});

export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
	CaptchaIsRequired = 10,
}
export type DefaultResponseType<D={}> = {
	data: D;
	resultCode: ResultCodesEnum;
	messages: Array<string>;
};
