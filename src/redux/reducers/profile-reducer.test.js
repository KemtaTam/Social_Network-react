import profileReducer, { addPost, delPost } from "./profile-reducer";

let actionNewPost = addPost("newPost")
let actionDelPost = delPost(1)
let state = {
	postData: [ 
		{
			id: 1, 
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sequi?', 
			likesCount: 2, likesFlag: true
		}, 
		{
			id: 2, 
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias ex necessitatibus numquam ducimus consectetur porro nobis magni fuga quia.', 
			likesCount: 22, likesFlag: true
		},
		{
			id: 3, 
			text: 'Hi', 
			likesCount: 10, likesFlag: true
		},
	],
}

test('new post should be added', () => {
	let oldLength = state.postData.length;
	let newState = profileReducer(state, actionNewPost)
	expect(newState.postData.length).toBe(oldLength+1);
});
test('post should be deleted', () => {
	let oldLength = state.postData.length;
	let newState = profileReducer(state, actionDelPost)
	expect(newState.postData.length).toBe(oldLength-1);
});
test('new post should contain this text', () => {
	let newState = profileReducer(state, actionNewPost)
	let length = newState.postData.length
	expect(newState.postData[length-1].text).toBe("newPost");
});

test('number of likes has changed', () => {
	
});

