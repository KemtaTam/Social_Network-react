import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Users from "./Users";
import { AppStateType } from "../../redux/redux-store";
import { UsersType } from "../../types/types";

import {actions,getUsers,changeFollowTC,} from "../../redux/reducers/users-reducer";
import {
	getBeginPageSelector,
	getCurrentPageSelector,
	getEndPageSelector,
	getFollowingInProgressSelector,
	getIsFetchingSelector,
	getPageSizeSelector,
	getTotalUsersCountSelector,
	getUsersSelector,
} from "../../redux/reducers/users-selectors";

import Preloader from "../common/Preloader/Preloader";

type MapStatePropsType = {
	usersData: Array<UsersType>;
	pageSize: number;
	totalItemsCount: number;
	currentPage: number;
	isFetching: boolean;
	followingInProgress: Array<number>;
	beginPage: number;
	endPage: number;
};
type MapDispatchPropsType = {
	getUsers: (currentPage: number, pageSize: number) => void;
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
		let { currentPage, pageSize } = this.props;
		this.props.getUsers(currentPage, pageSize);
	}

	setCurrentPage = (pNum: number) => {
		this.props.setCurrentPage(pNum);
		this.props.getUsers(pNum, this.props.pageSize);
	};

	render() {
		return (
			<span>
				{this.props.isFetching ? (
					<Preloader />
				) : (
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
					/>
				)}
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
	};
};

export default compose(
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
		getUsers,
		changeFollowTC,
		actions.setBeginEndPage,		//**************************** */
	})
)(UsersContainer);
