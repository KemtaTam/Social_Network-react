import s from "./UserItem.module.css";
import defaultAva from "../../../images/default.png";
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
	return (
		<div className={s.userItemWrapper}>
			<div className={s.userItem}>
				<div className={s.ava}>
					<NavLink to={'/profile/' + props.user.id}>
						<img src={props.user.photos.small === null ? defaultAva : props.user.photos.small} alt="ava" />
					</NavLink>
				</div>
				<div className={s.userInfo}>
					<NavLink to={'/profile/' + props.user.id}>
						<div className={s.name}>{props.user.name}</div>
					</NavLink>
					<div className={s.from}>{props.user.city}, {props.user.country}</div>
					<div className={s.education}>{props.user.education}</div>
					<div className={s.writeMessage}><a href="/">Write message</a> </div>
				</div>
				<button className={s.bIsFollow} 
						onClick={() => {props.changeFollowTC(props.user.id, props.user.followed)}} 
						disabled={props.followingInProgress.some(id => id === props.user.id)}>
					{props.user.followed ? 'Unfollow' : 'Follow'}
				</button>
			</div>
			<div className={s.line}></div>
		</div>
	)
}

export default UserItem;