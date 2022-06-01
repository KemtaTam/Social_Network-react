import { connect } from "react-redux";
import axios from "axios";
import React from "react"
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { setFetching, setUserProfile } from "../../redux/reducers/profile-reducer";

class ProfileContainer extends React.Component{

	componentDidMount(){
		this.props.setFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${3}`)	
			 .then(responce => {
				 debugger;
				this.props.setFetching(false);
				this.props.setUserProfile(responce.data);
			});
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
		isFetching: state.profilePage.isFetching
	}
}

export default connect(mapStateToProps, 
	{ setUserProfile, setFetching}
)(ProfileContainer);