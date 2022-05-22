import { connect } from "react-redux";
import { followActionCreator, setCurrentPageAC, setTotalUsersCountAC, setUsersAC } from "../../redux/reducers/users-reducer";
import UsersCC from "./UserCC";
//import Users from "./Users";

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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCC);	//************************ */

export default UsersContainer;