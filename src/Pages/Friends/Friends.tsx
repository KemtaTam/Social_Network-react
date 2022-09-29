import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import FriendItem from "./FriendItem/FriendItem";
import s from "./Friends.module.css";

const Friends = () => {
	const { friendsData } = useAppSelector((state) => state.friendsPage);
	const { isAuth } = useAppSelector((state) => state.auth);

	if (!isAuth) {
		return <Navigate to={"/login"} />;
	}

	let friendItem = friendsData.map((el) => (
		<FriendItem ava={el.ava} name={el.name} education={el.education} key={el.id} />
	));

	return <div className={s.wrapper}>{friendItem}</div>;
};

export default Friends;
