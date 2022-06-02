import s from "./UserItem.module.css";
import defaultAva from "../../../images/default.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

const UserItem = (props) => {
	let changeFollow = () => {
		if(!props.isFollow) {
			axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
			withCredentials: true,
			headers: {
				"API-KEY": "b5eebff0-62ad-4095-9c20-addf2dd71dda"
			} 
		})		
			.then(response => {
				if(!response.data.resultCode){
					props.changeFollow(props.id);
				}
			});
		} else {
			axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
			withCredentials: true,
			headers: {
				"API-KEY": "b5eebff0-62ad-4095-9c20-addf2dd71dda"
			} 
		})		
			.then(response => {
				if(!response.data.resultCode){
					props.changeFollow(props.id);
				}
			});
		}
	}

	return (
		<div className={s.userItemWrapper}>
			<div className={s.userItem}>
				<div className={s.ava}>
					<NavLink to={'/profile/' + props.id}>
						<img src={props.ava.small === null ? defaultAva : props.ava.small} alt="ava" />
					</NavLink>
				</div>
				<div className={s.userInfo}>
					<NavLink to={'/profile/' + props.id}>
						<div className={s.name}>{props.name}</div>
					</NavLink>
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