import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { login, logout } from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { LoginDataType } from "../../types/auth-types";
import Login from "./Login";

type MapStatePropsType = {
	isFetching: boolean;
	isAuth: boolean;
	captchaUrl: string | null;
};
type MapDispatchPropsType = {
	login: (loginData: LoginDataType, setStatus: (status: string[]) => void) => void;
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
