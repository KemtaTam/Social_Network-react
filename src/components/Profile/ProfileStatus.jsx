import React from "react";
import s from "./Profile.module.css"

class ProfileStatus extends React.Component {
	
	state = {
		editMode: false,
	}

	changeEditMode = () => {
		this.setState({
			editMode: !this.state.editMode
		})
	}

	render(){
		return ( 
			<div>
				{
					!this.state.editMode ? <div onClick={this.changeEditMode}>{this.props.status}</div> : 
					<input autoFocus={true} onBlur={this.changeEditMode} value={this.props.status} />
				}
			</div>
		)
	}
}

export default ProfileStatus;