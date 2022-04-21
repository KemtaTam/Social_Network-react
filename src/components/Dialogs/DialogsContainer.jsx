import { connect } from "react-redux";
import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

//старая контейнерная компонента
/* const DialogsContainer = (props) => {
	let state = props.store.getState();

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}
	let onMessageChange = (text) => {
		props.store.dispatch(onMessageChangeActionCreator(text));
	}

	return (
		<Dialogs addMessage={addMessage}
				onMessageChange={onMessageChange}
				dialogsData={state.dialogPage.dialogsData}
				messageData={state.dialogPage.messageData}
				newMessageValue={state.dialogPage.newMessageValue}
		/>
	)
} */

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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;