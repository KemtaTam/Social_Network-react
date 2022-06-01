import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserData} from '../../redux/reducers/auth-reducer'

class HeaderContainer extends React.Component{
	
	componentDidMount(){
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})		
			.then(responce => {
				if(!responce.data.resultCode) {
					let {id, login, email} = responce.data.data;
					this.props.setAuthUserData(id, email, login);
				}
			});
	}

	render() {
		return (
			<Header {...this.props}/>
		)
	}	
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);