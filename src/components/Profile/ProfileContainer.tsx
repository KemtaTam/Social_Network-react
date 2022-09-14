import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Navigate } from "react-router-dom";

import {
	getUserProfile,
	getStatus,
	updateStatus,
	savePhoto,
	saveProfile,
} from "../../redux/reducers/profile-reducer";
import { AppStateType } from "../../redux/redux-store";

import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "../../hoc/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { ProfileDataType } from "../../types/types";

type MapStatePropsType = {
	usersData: ProfileDataType | null;
	isFetching: boolean;
	status: string;
	isAuth: boolean;
	isAuthUserId: number | null;
	router?: any; //???
};
type MapDispatchPropsType = {
	getUserProfile: (userId: number) => void;
	getStatus: (userId: number) => void;
	updateStatus: (status: string) => void;
	savePhoto: (photo: File) => void;
	saveProfile: (
		profile: ProfileDataType,
		setStatus: (status: string) => void,
		setEditMode: (editMode: boolean) => void
	) => void;
};
type PropsType = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {
	refreshProfile() {
		let userId = this.props.router.params.userId
			? this.props.router.params.userId
			: this.props.isAuthUserId;

		if (!userId) {
			console.warn("ID should exists in URI params or in state ('isAuthUserId')");
		} else {
			this.props.getUserProfile(userId);
			this.props.getStatus(userId);
		}
	}

	componentDidMount() {
		this.refreshProfile();
	}
	componentDidUpdate(prevProps: PropsType) {
		if (this.props.router.params.userId !== prevProps.router.params.userId)
			this.refreshProfile();
	}

	render() {
		return (
			<div>
				{this.props.isFetching ? (
					<Preloader />
				) : this.props.isAuth ? (
					<Profile
						{...this.props}
						isOwner={!this.props.router?.params.userId}
						usersData={this.props.usersData}
						savePhoto={this.props.savePhoto}
						status={this.props.status}
						updateStatus={this.props.updateStatus}
						saveProfile={this.props.saveProfile}
					/>
				) : (
					<Navigate to={"/login"} />
				)}
			</div>
		);
	}
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		usersData: state.profilePage.usersData,
		isFetching: state.profilePage.isFetching,
		status: state.profilePage.status,
		isAuth: state.auth.isAuth,
		isAuthUserId: state.auth.userId,
	};
};

export default compose(
	connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
		getUserProfile,
		getStatus,
		updateStatus,
		savePhoto,
		saveProfile,
	}),
	withRouter,
	withAuthRedirect
)(ProfileContainer) as React.ComponentType;
