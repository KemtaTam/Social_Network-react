import { connect } from "react-redux";
import { changeFollow, setCurrentPage, setFollowingProgress,
		getUsers, changeFollowTC} from "../../redux/reducers/users-reducer";	
import React from "react"
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getCurrentPageSelector, getFollowingInProgressSelector, 
	getIsFetchingSelector, getPageSizeSelector, 
	getTotalUsersCountSelector, getUsersSelector } from "../../redux/reducers/users-selectors";

class UsersContainer extends React.Component{

	componentDidMount(){
		let {currentPage, pageSize} = this.props
		this.props.getUsers(currentPage, pageSize);
	}

	setCurrentPage = (pNum) => {
		this.props.setCurrentPage(pNum);
		this.props.getUsers(pNum, this.props.pageSize);
	}

	render(){
		return ( 
			<span>
				{this.props.isFetching ? <Preloader /> :  
					<Users totalUsersCount={this.props.totalUsersCount}
						 pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						usersData={this.props.usersData}
						followingInProgress={this.props.followingInProgress}
						changeFollowTC={this.props.changeFollowTC}
						setCurrentPage={this.setCurrentPage}
						/* {...this.props} */
					/>
				}
			</span>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		usersData: getUsersSelector(state),
		pageSize: getPageSizeSelector(state),
		totalUsersCount: getTotalUsersCountSelector(state),
		currentPage: getCurrentPageSelector(state),
		isFetching: getIsFetchingSelector(state),
		followingInProgress: getFollowingInProgressSelector(state)
	}
} 

export default compose(
	connect(mapStateToProps, {
		changeFollow, setCurrentPage, setFollowingProgress,
		getUsers, changeFollowTC
	}),
)(UsersContainer)