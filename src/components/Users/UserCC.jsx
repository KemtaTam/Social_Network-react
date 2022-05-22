import axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"

class UsersCC extends React.Component{

	componentDidMount(){
		if(!this.props.usersData.length){
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)		//??????? не обновляет видимость (не перерисовывает)
				 .then(responce => {
					this.props.setUsers(responce.data.items);
					this.props.setTotalUsersCount(responce.data.totalCount);
				 });
		}
	}

	setCurrentPage = (pNum) => {
		this.props.setCurrentPage(pNum)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pNum}&count=${this.props.pageSize}`)		//??????? не обновляет видимость (не перерисовывает)
			 .then(responce => {
				this.props.setUsers(responce.data.items);
			 });
	}

	render(){
		let pageCount = Math.ceil(this.props.totalUsersCount /  this.props.pageSize);
		let pages = [];

		for(let i=1; i<=pageCount; i++){
			pages.push(i);
			if(i === 20) break;
		}
		
		pages = pages.map(pNum => {
			return <div className={this.props.currentPage === pNum ? s.selected : undefined} 
						key={pNum}
						onClick={() => this.setCurrentPage(pNum)}>{pNum}</div> 
		})

		let userItem = this.props.usersData.map(el => {
			return <UserItem ava={el.photos} id={el.id}
					city={el.city} country={el.country} 
					key={el.id} isFollow={el.isFollow}
					status={el.status}
					changeFollow={this.props.changeFollow}
					name={el.name} education={el.education} 
				 />
		})
		
		return (
			<div className={s.wrapper}>
				<div className={s.pages}>
					{pages}
				</div>
				<div className={s.userWrapper}>
					{userItem}
				</div>
				<button className={s.bShowMore}>Show More</button>
			</div>
		)
	}
}

export default UsersCC;