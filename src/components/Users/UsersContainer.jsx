import { connect } from "react-redux";
import { changeFollow, setCurrentPage, setFetching, setTotalUsersCount, setUsers, setFollowingProgress } from "../../redux/reducers/users-reducer";
import React from "react"
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component{

	componentDidMount(){
		this.props.setFetching(true);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.setFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		});
	}

	setCurrentPage = (pNum) => {
		this.props.setCurrentPage(pNum)
		this.props.setFetching(true);
		usersAPI.getUsers(pNum, this.props.pageSize).then(data => {
			this.props.setFetching(false);
			this.props.setUsers(data.items);
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
						followingInProgress={this.props.followingInProgress}
						setFollowingProgress={this.props.setFollowingProgress}
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
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default connect(mapStateToProps, 
	{ changeFollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching, setFollowingProgress}
)(UsersContainer);

