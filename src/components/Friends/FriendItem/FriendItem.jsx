import s from "./FriendItem.module.css"

const FriendsItem = (props) => {
	return (
		<div className={s.friendItemWrapper}>
			<div className={s.friendItem}>
				<div className={s.ava}><img src={props.ava} alt="ava" /></div>
				<div className={s.friendInfo}>
					<div className={s.name}><a href="#">{props.name}</a></div>
					<div className={s.education}>{props.education}</div>
					<div className={s.writeMessage}><a href="#">Написать сообщение</a> </div>
				</div>
			</div>
			<div className={s.line}></div>
		</div>
	)
}

export default FriendsItem;