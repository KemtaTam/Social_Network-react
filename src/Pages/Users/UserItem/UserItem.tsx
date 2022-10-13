import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

import { useAppDispatch } from "../../../hooks/redux";
import { changeFollowTC } from "../../../redux/reducers/users-reducer";
import { UsersType } from "../../../types/types";
import defaultAva from "../../../images/default.png";
import s from "./UserItem.module.css";

type PropsType = {
	user: UsersType;
	followingInProgress: Array<number>;
};

export const UserItem: React.FC<PropsType> = ({ user, followingInProgress }) => {
	const dispatch = useAppDispatch();

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
						<a href="#">Write message</a>
					</div>
				</div>
				<Button
					className={s.bIsFollow}
					variant="outlined"
					onClick={() => dispatch(changeFollowTC(user.id, user.followed))}
					disabled={followingInProgress.some((id) => id === user.id)}>
					{user.followed ? "Unfollow" : "Follow"}
				</Button>
			</div>
			<div className={s.line}></div>
		</div>
	);
};

