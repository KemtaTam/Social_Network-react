import axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"

class UsersCC extends React.Component{
	constructor(props){
		super(props);
		if(this.props.usersData.length === 0){
			axios.get("https://social-network.samuraijs.com/api/1.0/users")		//??????? не обновляет видимость (не перерисовывает)
				 .then(responce => {this.props.setUsers(responce.data.items)});
		}
	}

	userItem = this.props.usersData.map(el => {
		return <UserItem ava={el.photos} id={el.id}
				city={el.city} country={el.country} 
				key={el.id} isFollow={el.isFollow}
				status={el.status}
				changeFollow={this.props.changeFollow}
				name={el.name} education={el.education} 
			 />
	})

	render(){
		return (
			<div className={s.wrapper}>
				<div className={s.userWrapper}>
					{this.userItem}
				</div>
				<button className={s.bShowMore}>Show More</button>
			</div>
		)
	}
}

export default UsersCC;