import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";

import Post from "./Post";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { actions } from "../../../redux/reducers/profile-reducer";
import s from "./Posts.module.css";

const PostsForm = () => {
	const dispatch = useAppDispatch();

	const formik = useFormik({
		initialValues: { post: "" },
		validationSchema: Yup.object({
			post: Yup.string().required(""),
		}),
		onSubmit: (values, { setSubmitting }) => {
			dispatch(actions.addPost(values.post));
			values.post = "";
			setSubmitting(false);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className={s.profile_new_post}>
				<TextField
					label="What's new?"
					value={formik.values.post}
					onChange={formik.handleChange}
					multiline
					variant="filled"
					fullWidth
					name="post"
					placeholder="What's new?"
					sx={{ bgcolor: "#242526FF" }}
				/>
				<Button
					sx={{ mt: 1 }}
					variant="contained"
					size="small"
					type="submit"
					disabled={formik.isSubmitting}>
					Publish
				</Button>
			</div>
		</form>
	);
};

const Posts = React.memo(() => {
	const { postData } = useAppSelector((state) => state.profilePage);

	const postItem = postData
		.map((el) => (
			<Post
				id={el.id}
				key={el.id}
				text={el.text}
				numOfLike={el.likesCount}
				likesFlag={el.likesFlag}
			/>
		))
		.reverse();

	return (
		<div className={s.profile_posts}>
			<div className={s.posts_wrapper}>
				<PostsForm />
				{postItem.length > 0 ? <div className={s.profile_title}>Publications</div> : null}
				{postItem}
			</div>
		</div>
	);
});

export default Posts;
