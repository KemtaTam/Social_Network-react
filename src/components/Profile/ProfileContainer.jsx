import { connect } from "react-redux";
import React from "react"
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { setFetching, setUserProfile } from "../../redux/reducers/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";

class ProfileContainer extends React.Component{

	componentDidMount(){
		this.props.setFetching(true);
		let userId = this.props.router.params.userId ? this.props.router.params.userId : 2;
		usersAPI.getUserProfile(userId).then(data => {
			this.props.setFetching(false);
			this.props.setUserProfile(data);
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

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, 
	{ setUserProfile, setFetching}
)(withRouter(ProfileContainer));