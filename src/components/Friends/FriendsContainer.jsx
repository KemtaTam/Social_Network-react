import { connect } from "react-redux";
//import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/reducers/friends-reducer";
import Friends from "./Friends";

let mapStateToProps = (state) => {
	return {
		friendsData: state.friendsPage.friendsData,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		
	}
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;