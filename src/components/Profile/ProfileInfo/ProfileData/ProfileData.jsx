import p from "./ProfileData.module.css"

const ProfileData = (props) =>{

	let contactsTitle = Object.keys(props.usersData.contacts).map((key) => {
		return <Contacts key={key} contactTitle={key} contactValue={props.usersData.contacts[key]} title={true}/>
	})
	let contactsValue = Object.keys(props.usersData.contacts).map((key) => {
		return <Contacts key={key} contactTitle={key} contactValue={props.usersData.contacts[key]} title={false}/>
	})

	return(
		<div>
			{props.isOwner && <div><button onClick={props.editModeOn}>Edit mode</button></div>}
			<div className={p.profile_additional}>
				<div className={p.profile_additional_kind}>
					<div>{props.usersData.aboutMe && "About:"}</div>
					<div>Looking for a job:</div>
					{contactsTitle}
				</div>
				<div className={p.profile_additional_value}>
					<div>{props.usersData.aboutMe && props.usersData.aboutMe}</div>
					<div>{!props.usersData.lookingForAJob ? "No" : props.usersData.lookingForAJobDescription}</div>
					{contactsValue}
				</div>
			</div>
		</div>
	)
}

const Contacts = (props) => {
	return(
		<div>
			{props.contactValue && 
			<div className={p.contacts}>
				{props.title ? props.contactTitle + ':' : props.contactValue}
			</div>}
		</div>
	)
}

export default ProfileData;