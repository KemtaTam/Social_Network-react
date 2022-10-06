import usersReducer, { actions, InitialStateType } from "./users-reducer";

let state: InitialStateType;

beforeEach(() => {
	state = {
		usersData: [
			{
				id: 0,
				name: "Bushkek0",
				followed: false,
				photos: { small: null, large: null },
				status: "lala1",
			},
			{
				id: 1,
				name: "Bushkek1",
				followed: false,
				photos: { small: null, large: null },
				status: "lala2",
			},
			{
				id: 2,
				name: "Bushkek2",
				followed: true,
				photos: { small: null, large: null },
				status: "lala3",
			},
			{
				id: 3,
				name: "Bushkek3",
				followed: true,
				photos: { small: null, large: null },
				status: "lala4",
			},
		],
		pageSize: 5,
		totalItemsCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: [],
		filter: {
			term: "",
			friend: null,
		},
	};
});

test("follow succes", () => {
	const newState = usersReducer(state, actions.changeFollow(1));
	expect(newState.usersData[0].followed).toBe(false);
	expect(newState.usersData[1].followed).toBe(true);
});
test("unfollow succes", () => {
	const newState = usersReducer(state, actions.changeFollow(3));
	expect(newState.usersData[2].followed).toBe(true);
	expect(newState.usersData[3].followed).toBe(false);
});
