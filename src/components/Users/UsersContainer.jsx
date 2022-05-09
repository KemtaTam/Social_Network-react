import { connect } from "react-redux";
import { followActionCreator, setUsersAC } from "../../redux/reducers/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
	return {
		usersData: state.usersPage.usersData,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		changeFollow: (id) => {
			dispatch(followActionCreator(id));
		},
		setUsers: (usersData) => {
			dispatch(setUsersAC(usersData));
		}
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;