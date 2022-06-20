import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { login } from "../../redux/reducers/auth-reducer";
import Login from "./Login";
import { Navigate } from "react-router-dom";

class LoginContainer extends React.Component{

	render(){
		if(this.props.isAuth){
			return <Navigate to={"/profile"}/>
		}
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
		isAuth: state.auth.isAuth
	}
}

export default compose(
	connect(mapStateToProps, {login}))
(LoginContainer);