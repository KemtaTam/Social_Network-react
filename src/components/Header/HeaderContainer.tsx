import React from "react";
import { connect } from "react-redux";
import Header from "./Header.tsx";
import { getAuthUserData, logout } from "../../redux/reducers/auth-reducer.ts";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
	isAuth: boolean;
	login: string;
};
type MapDispatchPropsType = {
	getAuthUserData: () => void;
	logout: () => void;
};
type PropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<PropsType> {
	componentDidMount() {
		this.props.getAuthUserData();
	}

	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
	mapStateToProps,
	{
		getAuthUserData,
		logout,
	}
)(HeaderContainer);
