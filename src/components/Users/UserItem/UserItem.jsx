import s from "./UserItem.module.css"

const UserItem = (props) => {
	let changeFollow = () => {
		props.changeFollow(props.id);
	}

	return (
		<div className={s.userItemWrapper}>
			<div className={s.userItem}>
				<div className={s.ava}><img src={props.ava} alt="ava" /></div>
				<div className={s.userInfo}>
					<div className={s.name}><a href="#">{props.name}</a></div>
					<div className={s.from}>{props.city}, {props.country}</div>
					<div className={s.education}>{props.education}</div>
					<div className={s.writeMessage}><a href="#">Write message</a> </div>
				</div>
				<button className={s.bIsFollow} onClick={changeFollow}>
					{props.isFollow ? 'Unfollow' : 'Follow'}
				</button>
			</div>
			<div className={s.line}></div>
		</div>
	)
}

export default UserItem;