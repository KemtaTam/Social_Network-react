import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css"

const Users = (props) => {
	
	let pageCount = Math.ceil(props.totalUsersCount /  props.pageSize);
	let pages = [];

	for(let i=1; i<=pageCount; i++){
		pages.push(i);
		if(i === 20) break;
	}
	
	pages = pages.map(pNum => {
		return <div className={props.currentPage === pNum ? s.selected : undefined} 
					key={pNum}
					onClick={() => props.setCurrentPage(pNum)}>{pNum}</div> 
	})

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

export default Users;

