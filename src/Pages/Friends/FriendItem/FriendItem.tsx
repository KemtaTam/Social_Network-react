import React from "react";
import s from "./FriendItem.module.css"

type PropsType = {
	ava: string;
	name: string;
	education: string;
}
const FriendItem : React.FC<PropsType>= ({ava, name, education}) => {
	return (
		<div className={s.friendItemWrapper}>
			<div className={s.friendItem}>
				<div className={s.ava}><img src={ava} alt="ava" /></div>
				<div className={s.friendInfo}>
					<div className={s.name}><a href="#">{name}</a></div>
					<div className={s.education}>{education}</div>
					<div className={s.writeMessage}><a href="#">Write message</a> </div>
				</div>
			</div>
			<div className={s.line}></div>
		</div>
	)
}

export default FriendItem;