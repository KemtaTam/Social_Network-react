let renderApp = () => {

}

let state = {
	profilePage: {
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

		changePostValue(text) {
			state.profilePage.newPostValue = text;
			//renderApp();
		},

		addPost() {
			let len = this.postData.length + 1;		//почему работает this здесь???
			this.postData.push({id: len, text: state.profilePage.newPostValue, likesCount: 0, likesFlag: true});
			state.profilePage.newPostValue = '';
			//renderApp();
		},

		addLike(id){
			state.profilePage.postData.forEach(el => {
				if(el.id === id){
					if(el.likesFlag){
						el.likesCount++;
						el.likesFlag = false;
					} else{
						el.likesCount--;
						el.likesFlag = true;
					}
				}
			});
			//renderApp();
		},
		
	},

	dialogPage: {
		dialogsData: [ 
			{id: 1, name: 'Andrey'}, 
			{id: 2, name: 'Dmitry'},
			{id: 3, name: 'Sasha'},
			{id: 4, name: 'Sveta'},
		],
		messageData: [ 
			{id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, a?'}, 
			{id: 2, message: 'Lorem.'},
			{id: 3, message: 'Lorem ipsum dolor sit'},
			{id: 4, message: 'Lorem ipsum dolor sit amet'},
			{id: 5, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur labore iusto, aut excepturi nulla?'},
		],

		newMessageValue: '',

		changeMessageValue(text) {
			state.dialogPage.newMessageValue = text;
			//renderApp();
		},

		addMessage() {
			let len = this.messageData.length + 1;		//почему работает this здесь???
			this.messageData.push({id: len, message: state.dialogPage.newMessageValue});
			state.dialogPage.newMessageValue = '';
			//renderApp();
		}
	},

	friendPage : {
		friendData: [
			{
				ava: "https://sun9-49.userapi.com/impf/c846217/v846217419/ff59d/WVZgeZN50Cs.jpg?size=700x875&quality=96&sign=9311eb1789c92d31cdfbb0dee24b5018&type=album", 
				name: "Эдуард Кузьмин", education: "TSU"
			},
			{
				ava: "https://sun4-12.userapi.com/s/v1/ig2/N7vsQqBR4TybGu6CFBLIK0FOunnxoCeDvocQo04zaJShZYFaDmB0qw0bTeo4k5VkDGdWCq6C0ira6jAjQ1iPp6Ie.jpg?size=50x50&quality=95&crop=528,360,527,527&ava=1", 
				name: "Алекс Кардо", education: "ASU"
			},
			{
				ava: "https://sun4-11.userapi.com/s/v1/if1/huCAwKq4nOTqwIm7xu8e77KEZ5lcbbdYCjt_NiGvFw713dHL131o6MMRgCuxMoAjBteFh1ab.jpg?size=50x50&quality=96&crop=12,12,200,200&ava=1", 
				name: "Андрей Приходько", education: "Jdayu"
			},
			{
				ava: "https://sun4-10.userapi.com/s/v1/ig2/xFtJ1E9I2AHLZTbyBjO4shcLyVKJ98xQ7KTGQkByFJh9RvRZond_FI49eP_zLPEad51wi1ynPY84ewFiOW6PebLE.jpg?size=50x50&quality=95&crop=68,35,480,480&ava=1", 
				name: "Виниамин Витамин", education: "BSU"
			},
		],

	},
}

export const subscribe = (observer) => {
	renderApp = observer;	//паттерн наблюдатель
}

export default state;
