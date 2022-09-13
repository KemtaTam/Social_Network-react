import { connect } from "react-redux";
import React from "react";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import {
	getUserProfile,
	getStatus,
	updateStatus,
	savePhoto,
	saveProfile,
} from "../../redux/reducers/profile-reducer";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Navigate } from "react-router-dom";
import { ProfileDataType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
	usersData: ProfileDataType | null;
	isFetching: boolean;
	status: string;
	isAuth: boolean;
	isAuthUserId: number | null;
	router?: any;
};
type MapDispatchPropsType = {
	getUserProfile: (userId: number) => void;
	getStatus: (userId: number) => void;
	updateStatus: (status: string) => void;
	savePhoto: (photo: any) => void;
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

		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}
	componentDidUpdate(prevProps: any) {
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
						isOwner={!this.props.router.params.userId}
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
	withRouter,
	connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
		getUserProfile,
		getStatus,
		updateStatus,
		savePhoto,
		saveProfile,
	}),
	withAuthRedirect
)(ProfileContainer);
