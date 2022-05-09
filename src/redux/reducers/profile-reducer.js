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
		case ADD_POST: {
			let len = state.postData.length + 1;
			return {
				...state,
				postData: [...state.postData, {id: len, text: state.newPostValue, likesCount: 0, likesFlag: true}],
				newPostValue: '',
			}
		};
		case CHANGE_POST_VALUE: {
			return {
				...state,
				newPostValue: action.text
			};
		}
		case ADD_LIKE: {
			return {
				...state, 
				postData: state.postData.map(post => {
					if(post.id === action.id){
						if(post.likesFlag) {
							return {...post, likesCount: ++post.likesCount, likesFlag: false}
						} else {
							return {...post, likesCount: --post.likesCount, likesFlag: true}
						}
					}
					return post;
				})
			};	
		}
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