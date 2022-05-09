import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"

const Users = (props) => {
	let userItem = props.usersData
		.map(el => <UserItem ava={el.ava} id={el.id}
						name={el.name} education={el.education} 
						city={el.city} country={el.country} 
						key={el.id} isFollow={el.isFollow}
						changeFollow={props.changeFollow}
					/>)

	return (
		<div className={s.wrapper}>
			<div className={s.userWrapper}>
				{userItem}
			</div>
			<button className={s.bShowMore}>Show More</button>
		</div>
	)
}

export default Users;

