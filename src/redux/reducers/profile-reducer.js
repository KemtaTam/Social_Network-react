const ADD_POST = 'ADD-POST';
const CHANGE_POST_VALUE = 'CHANGE-POST-VALUE';
const ADD_LIKE = 'ADD-LIKE';

let initialState = {
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
	newPostValue: '',
}

const profileReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let len = state.postData.length + 1;	
			state.postData.push({id: len, text: state.newPostValue, likesCount: 0, likesFlag: true});
			state.newPostValue = '';
			return state;
		case CHANGE_POST_VALUE:
			state.newPostValue = action.text;
			return state;
		case ADD_LIKE:
			state.postData.forEach(el => {
				if(el.id === action.id){
					if(el.likesFlag){
						el.likesCount++;
						el.likesFlag = false;
					} else{
						el.likesCount--;
						el.likesFlag = true;
					}
				}
			});
			return state;
	
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({
	type: ADD_POST
})
export const onPostChangeActionCreator = (text) => ({
	type: CHANGE_POST_VALUE,
	text: text
})
export const addLikeActionCreator = (id) => ({
	type: ADD_LIKE,
	id: id
})

export default profileReducer;