import { connect } from "react-redux";
import React from "react"
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { getUserProfile, getStatus, updateStatus } from "../../redux/reducers/profile-reducer";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component{

	componentDidMount(){
		debugger
		let userId = this.props.router.params.userId ? this.props.router.params.userId : this.props.isAuthUserId;
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	} 

	render(){
		return (
			<div>
				{this.props.isFetching ? <Preloader /> : 
					this.props.isAuth ? <Profile {...this.props}/> : 
						<Navigate to={"/login"}/>}
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		usersData: state.profilePage.usersData,
		isFetching: state.profilePage.isFetching,
		status: state.profilePage.status,
		isAuth: state.auth.isAuth,
		isAuthUserId: state.auth.userId
	}
}

export default compose(
	withRouter,
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withAuthRedirect
)(ProfileContainer);