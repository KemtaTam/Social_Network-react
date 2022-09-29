import React from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { actions } from "../../../redux/reducers/profile-reducer";
import p from "./Posts.module.css";

type PropsType = {
	id: number;
	text: string;
	numOfLike: number;
};
const Post: React.FC<PropsType> = ({id, text, numOfLike}) => {
	const dispatch = useAppDispatch();

	return (
		<div className={p.profile_post}>
			<div className={p.post_wrapper}>
				<div className={p.top_post_wrapper}>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQblpU20ze2Vsusvi7MmRwzZYanB0cVwNJHg&usqp=CAU"
						alt="ava"
					/>
					<button className={p.bDel} onClick={() => dispatch(actions.delPost(id))}>
						X
					</button>
				</div>
				<div className={p.post_text}>{text}</div>
			</div>
			<button className={p.bLike} onClick={() => dispatch(actions.addLike(id))}>
				like
			</button>{" "}
			<span className={p.likesCount}>{numOfLike}</span>
		</div>
	);
};

export default Post;
