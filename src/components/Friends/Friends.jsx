import FriendsItem from "./FriendItem/FriendItem";
import s from "./Friends.module.css"

const Friends = (props) => {
	let friendItem = props.friendPage.friendData
		.map(el => <FriendsItem ava={el.ava} name={el.name} education={el.education} key={el.id} />)

	return (
		<div className={s.wrapper}>
			{friendItem}
		</div>
	)
}

export default Friends;