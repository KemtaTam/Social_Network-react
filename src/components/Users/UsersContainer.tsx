import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Users from "./Users";
import { AppStateType } from "../../redux/redux-store";
import { UsersType } from "../../types/types";

import { actions, getUsers, changeFollowTC, FilterType } from "../../redux/reducers/users-reducer";
import {
	getBeginPageSelector,
	getCurrentPageSelector,
	getEndPageSelector,
	getFilterSelector,
	getFollowingInProgressSelector,
	getIsFetchingSelector,
	getPageSizeSelector,
	getTotalUsersCountSelector,
	getUsersSelector,
} from "../../redux/reducers/users-selectors";

type MapStatePropsType = {
	usersData: Array<UsersType>;
	pageSize: number;
	totalItemsCount: number;
	currentPage: number;
	isFetching: boolean;
	followingInProgress: Array<number>;
	beginPage: number;
	endPage: number;
	filter: FilterType;
};
type MapDispatchPropsType = {
	getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void;
	changeFollow: (userId: number) => void;
	setCurrentPage: (currentPage: number) => void;
	setFollowingProgress: (isFetching: boolean, userId: number) => void;
	changeFollowTC: (userId: number, followed: boolean) => void;
	setBeginEndPage: (beginPage: number, endPage: number) => void;
};
type OwnPropsType = {
	title: string;
};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
	componentDidMount() {
		const { currentPage, pageSize, filter } = this.props;
		this.props.getUsers(currentPage, pageSize, filter);
	}

	setCurrentPage = (pNum: number) => {
		const { pageSize, filter } = this.props;
		this.props.setCurrentPage(pNum);
		this.props.getUsers(pNum, pageSize, filter);
	};

	onFilterChanged = (filter: FilterType) => {
		const { pageSize } = this.props;
		this.props.getUsers(1, pageSize, filter);
	};

	render() {
		return (
			<span>
				<Users
					totalItemsCount={this.props.totalItemsCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					usersData={this.props.usersData}
					followingInProgress={this.props.followingInProgress}
					changeFollowTC={this.props.changeFollowTC}
					setCurrentPage={this.setCurrentPage}
					setBeginEndPage={this.props.setBeginEndPage}
					beginPage={this.props.beginPage}
					endPage={this.props.endPage}
					isFetching={this.props.isFetching}
					onFilterChanged={this.onFilterChanged}
				/>
			</span>
		);
	}
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		usersData: getUsersSelector(state),
		pageSize: getPageSizeSelector(state),
		totalItemsCount: getTotalUsersCountSelector(state),
		currentPage: getCurrentPageSelector(state),
		isFetching: getIsFetchingSelector(state),
		followingInProgress: getFollowingInProgressSelector(state),
		beginPage: getBeginPageSelector(state),
		endPage: getEndPageSelector(state),
		filter: getFilterSelector(state),
	};
};

export default compose<React.ComponentType>(
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
		getUsers,
		changeFollowTC,
		setBeginEndPage: actions.setBeginEndPage,
		changeFollow: actions.changeFollow,
		setCurrentPage: actions.setCurrentPage,
		setFollowingProgress: actions.setFollowingProgress,
	})
)(UsersContainer);
