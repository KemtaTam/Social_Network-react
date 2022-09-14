import { PostType, ProfileDataType } from "../../types/types";
import profileReducer, { actions } from "./profile-reducer";

let actionNewPost = actions.addPost("newPost");
let actionDelPost = actions.delPost(1);

let state = {
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

test("new post should be added", () => {
	let oldLength = state.postData.length;
	let newState = profileReducer(state, actionNewPost);
	expect(newState.postData.length).toBe(oldLength + 1);
});
test("post should be deleted", () => {
	let oldLength = state.postData.length;
	let newState = profileReducer(state, actionDelPost);
	expect(newState.postData.length).toBe(oldLength - 1);
});
test("new post should contain this text", () => {
	let newState = profileReducer(state, actionNewPost);
	let length = newState.postData.length;
	expect(newState.postData[length - 1].text).toBe("newPost");
});

test("number of likes has been increased", () => {
	let id = 1;
	let actionAddLike = actions.addLike(id);
	let oldLikesCount = state.postData[id - 1].likesCount;
	let newState = profileReducer(state, actionAddLike);
	expect(newState.postData[id - 1].likesCount).toBe(oldLikesCount + 1);
});
test("number of likes has been decreased", () => {
	let id = 2;
	let actionAddLike = actions.addLike(id);
	let oldLikesCount = state.postData[id - 1].likesCount;
	let newState = profileReducer(state, actionAddLike);
	expect(newState.postData[id - 1].likesCount).toBe(oldLikesCount - 1);
});
