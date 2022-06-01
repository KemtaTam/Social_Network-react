const ADD_POST = 'ADD-POST';
const CHANGE_POST_VALUE = 'CHANGE-POST-VALUE';
const ADD_LIKE = 'ADD-LIKE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SWITCH_IS_FETCHING = 'SWITCH-IS-FETCHING';

let initialState = {
	usersData: null,
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
	isFetching: false,
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
		}
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
		case SWITCH_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state, 
				usersData: action.usersData
			}	
		}

		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: CHANGE_POST_VALUE, text})
export const addLikeActionCreator = (id) => ({type: ADD_LIKE, id})
export const setUserProfile = (usersData) => ({type: SET_USER_PROFILE, usersData})
export const setFetching = (isFetching) => ({type: SWITCH_IS_FETCHING, isFetching})

export default profileReducer;