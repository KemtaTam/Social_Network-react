import { connect } from "react-redux";
import { followActionCreator, setUsersAC } from "../../redux/reducers/users-reducer";
import UsersCC from "./UserCC";
//import Users from "./Users";

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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCC);

export default UsersContainer;