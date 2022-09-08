import React from "react";
import { NavLink } from "react-router-dom";

import { UsersType } from "../../../types/types";

import s from "./UserItem.module.css";
import defaultAva from "../../../images/default.png";

type PropsType = {
	user: UsersType;
	followingInProgress: Array<number>;
	changeFollowTC: (userId: number, followed: boolean) => void;
};

const UserItem: React.FC<PropsType> = ({ user, followingInProgress, changeFollowTC }) => {
	return (
		<div className={s.userItemWrapper}>
			<div className={s.userItem}>
				<div className={s.ava}>
					<NavLink to={"/profile/" + user.id}>
						<img
							src={user.photos.small === null ? defaultAva : user.photos.small}
							alt="ava"
						/>
					</NavLink>
				</div>
				<div className={s.userInfo}>
					<NavLink to={"/profile/" + user.id}>
						<div className={s.name}>{user.name}</div>
					</NavLink>
					<div className={s.status}>{user.status}</div>
					<div className={s.writeMessage}>
						<a href="/">Write message</a>{" "}
					</div>
				</div>
				<button
					className={s.bIsFollow}
					onClick={() => {
						changeFollowTC(user.id, user.followed);
					}}
					disabled={followingInProgress.some((id) => id === user.id)}>
					{user.followed ? "Unfollow" : "Follow"}
				</button>
			</div>
			<div className={s.line}></div>
		</div>
	);
};

export default UserItem;
