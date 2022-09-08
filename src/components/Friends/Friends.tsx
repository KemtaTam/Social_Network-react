import React from "react";
import { FriendsType } from "../../types/friends-types";
import FriendItem from "./FriendItem/FriendItem.tsx";
import s from "./Friends.module.css";

type PropsType = {
	friendsData: Array<FriendsType>;
};
const Friends: React.FC<PropsType> = ({ friendsData }) => {
	let friendItem = friendsData.map((el) => (
		<FriendItem ava={el.ava} name={el.name} education={el.education} key={el.id} />
	));

	return <div className={s.wrapper}>{friendItem}</div>;
};

export default Friends;
