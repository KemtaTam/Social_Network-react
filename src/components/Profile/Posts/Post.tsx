import React from "react";
import p from "./Posts.module.css";

type PropsType = {
	addLike: (id: number) => void;
	delPost: (id: number) => void;
	id: number;
	text: string;
	numOfLike: number;
};
const Post: React.FC<PropsType> = ({addLike, delPost, id, text, numOfLike}) => {
	let _addLike = () => {
		addLike(id);
	};
	let _delPost = () => {
		delPost(id);
	};

	return (
		<div className={p.profile_post}>
			<div className={p.post_wrapper}>
				<div className={p.top_post_wrapper}>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQblpU20ze2Vsusvi7MmRwzZYanB0cVwNJHg&usqp=CAU"
						alt="ava"
					/>
					<button className={p.bDel} onClick={_delPost}>
						X
					</button>
				</div>
				<div className={p.post_text}>{text}</div>
			</div>
			<button className={p.bLike} onClick={_addLike}>
				like
			</button>{" "}
			<span className={p.likesCount}>{numOfLike}</span>
		</div>
	);
};

export default Post;
