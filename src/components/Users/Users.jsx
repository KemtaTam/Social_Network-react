import Paginator from "../common/Paginator/Paginator";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"

let Users = (props) => {

	let userItem = props.usersData.map(el => {
		return <UserItem user={el} {...props} key={el.id}/>
	})
	
	return (
		<div className={s.wrapper}>
			<Paginator {...props}/>
			<div className={s.userWrapper}>
				{userItem}
			</div>
			<button className={s.bShowMore}>Show More</button>
		</div>
	)
}

export default Users;

