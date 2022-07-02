import { createSelector } from "reselect";

const getUsers = (state) => {
	return state.usersPage.usersData; 
}
export const getUsersSelector = createSelector(getUsers, (usersData) => {
	return usersData;	//типо что-то сложное
})

export const getPageSizeSelector = (state) => {
	return state.usersPage.pageSize;
}
export const getTotalUsersCountSelector = (state) => {
	return state.usersPage.totalItemsCount;
}
export const getCurrentPageSelector = (state) => {
	return state.usersPage.currentPage;
}
export const getIsFetchingSelector = (state) => {
	return state.usersPage.isFetching;
}
export const getFollowingInProgressSelector = (state) => {
	return state.usersPage.followingInProgress;
}
export const getBeginPageSelector = (state) => {
	return state.usersPage.beginPage;
}
export const getEndPageSelector = (state) => {
	return state.usersPage.endPage;
}