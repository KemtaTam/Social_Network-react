import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { login, logout } from "../../redux/reducers/auth-reducer.ts";
import Login from "./Login";

class LoginContainer extends React.Component{

	render(){
		return ( 
			<span>
				 <Login {...this.props}/>
			</span>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		isFetching: state.usersPage.isFetching,
		isAuth: state.auth.isAuth,
		captchaUrl: state.auth.captchaUrl
	}
}

export default compose(
	connect(mapStateToProps, {login, logout}))
(LoginContainer);