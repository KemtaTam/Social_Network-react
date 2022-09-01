import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessage } from "../../redux/reducers/dialogs-reducer.ts";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
	return {
		dialogsData: state.dialogPage.dialogsData,
		messageData: state.dialogPage.messageData,
	}
}

export default compose(
	connect(mapStateToProps, {addMessage}), 
	withAuthRedirect)
(Dialogs);