import s from "./UserItem.module.css";
import defaultAva from "../../../images/default.png";
import {NavLink} from "react-router-dom";

const UserItem = (props) => {

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
					<div className={s.writeMessage}><a href="/">Write message</a> </div>
				</div>
				<button className={s.bIsFollow} 
						onClick={() => {props.changeFollowTC(props.id, props.followed)}} 
						disabled={props.followingInProgress.some(id => id === props.id)}>
					{props.followed ? 'Unfollow' : 'Follow'}
				</button>
			</div>
			<div className={s.line}></div>
		</div>
	)
}

export default UserItem;