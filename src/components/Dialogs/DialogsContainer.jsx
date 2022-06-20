import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessage, onMessageChange } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
	return {
		dialogsData: state.dialogPage.dialogsData,
		messageData: state.dialogPage.messageData,
		newMessageValue: state.dialogPage.newMessageValue,
	}
}

export default compose(
	connect(mapStateToProps, {addMessage, onMessageChange}), 
	withAuthRedirect)
(Dialogs);