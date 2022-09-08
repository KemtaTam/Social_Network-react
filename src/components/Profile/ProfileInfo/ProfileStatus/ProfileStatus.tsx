import React, { ChangeEvent } from "react";

type PropsType = {
	status: string;
	updateStatus: (status: string) => void;
}
type StateType = {
	editMode: boolean;
	status: string;
}

class ProfileStatus extends React.Component<PropsType> {

	componentDidUpdate(prevProps: PropsType, prevState: StateType) {
		if(prevProps.status !== this.props.status) 
			this.setState({status: this.props.status})
	}
	
	state = {
		editMode: false,
		status: this.props.status
	}

	changeEditMode = () => {
		this.setState({
			editMode: !this.state.editMode
		})
		if(this.state.editMode) this.props.updateStatus(this.state.status);
	}
	onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			status: e.currentTarget.value
		}); 
	}

	render(){
		return ( 
			<div>{!this.state.editMode ? 
					<div onClick={this.changeEditMode}>{!this.props.status ? 'status' : this.props.status}</div> : 
					<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.changeEditMode} 
						value={this.state.status} 
					/>
				 }
			</div>
		)
	}
}

export default ProfileStatus;