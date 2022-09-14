import { connect } from "react-redux";
import { compose } from "redux";

import { AppStateType } from "../../redux/redux-store";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { actions } from "../../redux/reducers/dialogs-reducer";
import { DialogType, MessageType } from "../../types/dialogs-types";
import Dialogs from "./Dialogs";

type MapStatePropsType = {
	dialogsData: Array<DialogType>;
	messageData: Array<MessageType>;
};
type MapDispatchPropsType = {
	addMessage: (newMessageBody: string) => void;
};
type OwnPropsType = {};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		dialogsData: state.dialogPage.dialogsData,
		messageData: state.dialogPage.messageData,
	};
};

export default compose<React.ComponentType>(
	withAuthRedirect,
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
		addMessage: actions.addMessage,
	}),
)(Dialogs);
