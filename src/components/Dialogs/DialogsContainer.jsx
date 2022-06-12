import { connect } from "react-redux";
import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
	return {
		dialogsData: state.dialogPage.dialogsData,
		messageData: state.dialogPage.messageData,
		newMessageValue: state.dialogPage.newMessageValue,
		
		isAuth: state.auth.isAuth
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;