import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import Friends from "./Friends.tsx";
import {FriendsType} from "../../types/friends-types";

type MapStatePropsType = {
	friendsData: Array<FriendsType>;
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		friendsData: state.friendsPage.friendsData,
	}
}
const FriendsContainer = connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {})(Friends);

export default FriendsContainer;