import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

import { useAppDispatch } from "../../../hooks/redux";
import { actions } from "../../../redux/reducers/profile-reducer";
import p from "./Posts.module.css";

type PropsType = {
	id: number;
	text: string;
	numOfLike: number;
	likesFlag: boolean;
};
const Post: React.FC<PropsType> = ({ id, text, numOfLike, likesFlag }) => {
	const dispatch = useAppDispatch();

	return (
		<div className={p.profile_post}>
			<div className={p.post_wrapper}>
				<div className={p.top_post_wrapper}>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQblpU20ze2Vsusvi7MmRwzZYanB0cVwNJHg&usqp=CAU"
						alt="ava"
					/>
					<Button className={p.bDel} variant="text" size="medium" onClick={() => dispatch(actions.delPost(id))}>
						X
					</Button>
				</div>
				<div className={p.post_text}>{text}</div>
			</div>
			<div className={p.bLike_wrapper}>
				<button className={p.bLike} onClick={() => dispatch(actions.addLike(id))}>
					{likesFlag ? (
						<FavoriteBorderIcon sx={{ color: "#171819FF" }} />
					) : (
						<FavoriteIcon sx={{ color: "rgb(230, 27, 27)" }} />
					)}
				</button>
				<span className={p.likesCount}>{numOfLike}</span>
			</div>
		</div>
	);
};

export default Post;
