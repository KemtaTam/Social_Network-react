import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
	return {
		dialogsData: state.dialogPage.dialogsData,
		messageData: state.dialogPage.messageData,
		newMessageValue: state.dialogPage.newMessageValue,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		onMessageChange: (text) => {
			dispatch(onMessageChangeActionCreator(text));
		},
		addMessage: () => {
			dispatch(addMessageActionCreator());
		}
	}
}

export default withAuthRedirect(connect(
	mapStateToProps, 
	mapDispatchToProps)
(Dialogs));