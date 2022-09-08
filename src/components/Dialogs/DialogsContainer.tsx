import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessage } from "../../redux/reducers/dialogs-reducer.ts";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs.tsx";
import { DialogType, MessageType } from "../../types/dialogs-types";

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

export default compose(
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
		addMessage,
	}),
	withAuthRedirect
)(Dialogs);
