import { connect } from "react-redux";
import { followActionCreator, setCurrentPageAC, setTotalUsersCountAC, setUsersAC } from "../../redux/reducers/users-reducer";
import axios from "axios";
import React from "react"
import Users from "./Users";

class UsersContainer extends React.Component{

	componentDidMount(){
		if(!this.props.usersData.length){
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)		//??????? не обновляет видимость (не перерисовывает)
				 .then(responce => {
					this.props.setUsers(responce.data.items);
					this.props.setTotalUsersCount(responce.data.totalCount);
				 });
		}
	}

	setCurrentPage = (pNum) => {
		this.props.setCurrentPage(pNum)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pNum}&count=${this.props.pageSize}`)		//??????? не обновляет видимость (не перерисовывает)
			 .then(responce => {
				this.props.setUsers(responce.data.items);
			 });
	}

	render(){
		return <Users totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					setCurrentPage={this.setCurrentPage}
					usersData={this.props.usersData}
					changeFollow={this.props.changeFollow}
				/>
	}
}

let mapStateToProps = (state) => {
	return {
		usersData: state.usersPage.usersData,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		changeFollow: (id) => {
			dispatch(followActionCreator(id));
		},
		setUsers: (usersData) => {
			dispatch(setUsersAC(usersData));
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

