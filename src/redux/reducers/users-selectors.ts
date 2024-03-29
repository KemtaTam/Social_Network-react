import { AppStateType } from "./../redux-store";
import { createSelector } from "reselect";

const getUsers = (state: AppStateType) => {
	return state.usersPage.usersData;
};
export const getUsersSelector = createSelector(getUsers, (usersData) => {
	return usersData; 
});

export const getPageSizeSelector = (state: AppStateType) => {
	return state.usersPage.pageSize;
};
export const getTotalUsersCountSelector = (state: AppStateType) => {
	return state.usersPage.totalItemsCount;
};
export const getCurrentPageSelector = (state: AppStateType) => {
	return state.usersPage.currentPage;
};
export const getIsFetchingSelector = (state: AppStateType) => {
	return state.usersPage.isFetching;
};
export const getFollowingInProgressSelector = (state: AppStateType) => {
	return state.usersPage.followingInProgress;
};
export const getFilterSelector = (state: AppStateType) => {
	return state.usersPage.filter;
};
