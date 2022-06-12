import { connect } from "react-redux";
import React from "react"
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { getUserProfile } from "../../redux/reducers/profile-reducer";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component{

	componentDidMount(){
		let userId = this.props.router.params.userId ? this.props.router.params.userId : 2;
		this.props.getUserProfile(userId);
	}

	render(){
		if(!this.props.isAuth){
			return <Navigate to={"/login"}/>
		}
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

		isAuth: state.auth.isAuth
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
	{getUserProfile}
)(withRouter(ProfileContainer));