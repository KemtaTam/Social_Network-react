import { connect } from "react-redux";
import React from "react"
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { getUserProfile } from "../../redux/reducers/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";

class ProfileContainer extends React.Component{

	componentDidMount(){
		let userId = this.props.router.params.userId ? this.props.router.params.userId : 2;
		this.props.getUserProfile(userId);
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
	}
}

export default compose(
	withRouter,
	connect(mapStateToProps, {getUserProfile}),
	/* withAuthRedirect */
)(ProfileContainer);