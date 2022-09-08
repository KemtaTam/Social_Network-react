import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { login, logout } from "../../redux/reducers/auth-reducer.ts";
import { AppStateType } from "../../redux/redux-store";
import Login from "./Login.tsx";

type MapStatePropsType = {
	isFetching: boolean;
	isAuth: boolean;
	captchaUrl: string;
};
type MapDispatchPropsType = {
	login: (email: string, password: string, rememberMe: boolean, captcha: string) => void;
	logout: () => void;
};
type PropsType = MapStatePropsType & MapDispatchPropsType;

class LoginContainer extends React.Component<PropsType> {
	render() {
		return (
			<span>
				<Login {...this.props} />
			</span>
		);
	}
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		isFetching: state.usersPage.isFetching,
		isAuth: state.auth.isAuth,
		captchaUrl: state.auth.captchaUrl,
	};
};

export default compose(
	connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
		login,
		logout,
	})
)(LoginContainer);
