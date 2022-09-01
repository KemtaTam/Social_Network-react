import { connect } from "react-redux";
import { changeFollow, setCurrentPage, setFollowingProgress,
		getUsers, changeFollowTC, setBeginEndPage} from "../../redux/reducers/users-reducer.ts";	
import React from "react"
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getBeginPageSelector, getCurrentPageSelector, getEndPageSelector, 
	getFollowingInProgressSelector, getIsFetchingSelector, getPageSizeSelector, 
	getTotalUsersCountSelector, getUsersSelector, } from "../../redux/reducers/users-selectors";

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
					<Users totalItemsCount={this.props.totalItemsCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						usersData={this.props.usersData}
						followingInProgress={this.props.followingInProgress}
						changeFollowTC={this.props.changeFollowTC}
						setCurrentPage={this.setCurrentPage}
						setBeginEndPage={this.props.setBeginEndPage}
						beginPage={this.props.beginPage}
						endPage={this.props.endPage}
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
		totalItemsCount: getTotalUsersCountSelector(state),
		currentPage: getCurrentPageSelector(state),
		isFetching: getIsFetchingSelector(state),
		followingInProgress: getFollowingInProgressSelector(state),
		beginPage: getBeginPageSelector(state),
		endPage: getEndPageSelector(state),
	}
} 

export default compose(
	connect(mapStateToProps, {
		changeFollow, setCurrentPage, setFollowingProgress,
		getUsers, changeFollowTC, setBeginEndPage
	}),
)(UsersContainer)