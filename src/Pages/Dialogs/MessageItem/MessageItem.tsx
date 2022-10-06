import React, {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import defaultAva from '../../../images/default.png';
import { getUserProfile } from "../../../redux/reducers/profile-reducer";
import s from "./MessageItem.module.css"

type PropsType = {
	message: string;
}
const MessageItem: React.FC<PropsType> = ({message}) => { 
	const { usersData } = useAppSelector((state) => state.profilePage);
	const { userId } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const ava = usersData?.photos.small;

	useEffect(() => {
		if(userId) dispatch(getUserProfile(userId))
	}, [userId])

	return (
		<div className={s.message_item}>
			<img className={s.ava} src={ava || defaultAva} alt="ava" />
			{message}
		</div>
	)
}

export default MessageItem;