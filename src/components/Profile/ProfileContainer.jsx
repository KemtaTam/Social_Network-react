import { connect } from "react-redux";
import React from "react"
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { getUserProfile } from "../../redux/reducers/profile-reducer";
import { getStatus } from "../../redux/reducers/profile-reducer";
import { updateStatus } from "../../redux/reducers/profile-reducer";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

	componentDidMount(){
		let userId = this.props.router.params.userId ? this.props.router.params.userId : 24277;
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	} 

	render(){
		return (
			<div>
				{this.props.isFetching ? <Preloader /> : <Profile {...this.props}/>}
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		usersData: state.profilePage.usersData,
		isFetching: state.profilePage.isFetching,
		status: state.profilePage.status
	}
}

export default compose(
	withRouter,
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withAuthRedirect
)(ProfileContainer);