import axios from "axios";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"

const Users = (props) => {
	
	let getUsers = () => {
		if(props.usersData.length === 0){
			axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
				props.setUsers(responce.data.items);
			});
		}
	}
	
	let userItem = props.usersData.map(el => {
		return <UserItem ava={el.photos} id={el.id}
				city={el.city} country={el.country} 
				key={el.id} isFollow={el.isFollow}
				status={el.status}
				changeFollow={props.changeFollow}
				name={el.name} education={el.education} 
			/>
	})

	return (
		<div className={s.wrapper}>
			<button onClick={getUsers}>get users</button>
			<div className={s.userWrapper}>
				{userItem}
			</div>
			<button className={s.bShowMore}>Show More</button>
		</div>
	)
}

export default Users;

