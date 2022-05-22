const CHANGE_FOLLOW = 'CHANGE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
	usersData: [
		/* {
			id: 1, name: "Эдуард Кузьмин", education: "TSU", city: "Blagovegas", country: "Russian", isFollow: false,
			ava: "https://sun9-49.userapi.com/impf/c846217/v846217419/ff59d/WVZgeZN50Cs.jpg?size=700x875&quality=96&sign=9311eb1789c92d31cdfbb0dee24b5018&type=album", 
		},
		{
			id: 2, name: "Алекс Кардо", education: "ASU", city: "Omsk", country: "Russian", isFollow: false,
			ava: "https://sun4-12.userapi.com/s/v1/ig2/N7vsQqBR4TybGu6CFBLIK0FOunnxoCeDvocQo04zaJShZYFaDmB0qw0bTeo4k5VkDGdWCq6C0ira6jAjQ1iPp6Ie.jpg?size=50x50&quality=95&crop=528,360,527,527&ava=1", 
		},
		{
			id: 3, name: "Андрей Приходько", education: "Jdayu", city: "New-York", country: "Kazahstan", isFollow: false,
			ava: "https://sun4-11.userapi.com/s/v1/if1/huCAwKq4nOTqwIm7xu8e77KEZ5lcbbdYCjt_NiGvFw713dHL131o6MMRgCuxMoAjBteFh1ab.jpg?size=50x50&quality=96&crop=12,12,200,200&ava=1", 
		},
		{
			id: 4, name: "Виниамин Витамин", education: "BSU", city: "Tomsk", country: "Russian", isFollow: false,
			ava: "https://sun4-10.userapi.com/s/v1/ig2/xFtJ1E9I2AHLZTbyBjO4shcLyVKJ98xQ7KTGQkByFJh9RvRZond_FI49eP_zLPEad51wi1ynPY84ewFiOW6PebLE.jpg?size=50x50&quality=95&crop=68,35,480,480&ava=1", 
		}, */
	],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 3
}

const usersReducer = (state=initialState, action) => {
	switch (action.type) {

		case CHANGE_FOLLOW: {
			return {
				...state, 
				usersData: state.usersData.map(user => {
					if(user.id === action.id){
						return {...user, isFollow : !user.isFollow}
					}
					return user;
				})
			}
		}
		case SET_USERS: {
			return {
				...state, 
				usersData: action.usersData
			}	
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.totalCount
			}
		}

		default:
			return state;
	}
}

export const followActionCreator = (id) => ({type: CHANGE_FOLLOW, id: id})
export const setUsersAC = (usersData) => ({type: SET_USERS, usersData})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})

export default usersReducer;