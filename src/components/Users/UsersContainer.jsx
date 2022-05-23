import { connect } from "react-redux";
import { changeFollow, setCurrentPage, setFetching, setTotalUsersCount, setUsers } from "../../redux/reducers/users-reducer";
import axios from "axios";
import React from "react"
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component{

	componentDidMount(){
		if(!this.props.usersData.length){
			this.props.setFetching(true);
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)		//??????? не обновляет видимость (не перерисовывает)
				 .then(responce => {
					this.props.setFetching(false);
					this.props.setUsers(responce.data.items);
					this.props.setTotalUsersCount(responce.data.totalCount);
				 });
		}
	}

	setCurrentPage = (pNum) => {
		this.props.setCurrentPage(pNum)
		this.props.setFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pNum}&count=${this.props.pageSize}`)		//??????? не обновляет видимость (не перерисовывает)
			 .then(responce => {
				this.props.setFetching(false);
				this.props.setUsers(responce.data.items);
			 });
	}

	render(){
		return ( 
			<span>
				{this.props.isFetching ? <Preloader /> :  
					<Users totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						setCurrentPage={this.setCurrentPage}
						usersData={this.props.usersData}
						changeFollow={this.props.changeFollow}
					/>
				}
			</span>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		usersData: state.usersPage.usersData,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

/* let mapDispatchToProps = (dispatch) => {
	return {
		changeFollow: (id) => {
			dispatch(followAC(id));
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
		setFetching: (isFetching) => {
			dispatch(setFetchingAC(isFetching))
		}
	}
} */

export default connect(mapStateToProps, 
	{ changeFollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching}
)(UsersContainer);

