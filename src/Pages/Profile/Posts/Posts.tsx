import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import Post from "./Post";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { actions } from "../../../redux/reducers/profile-reducer";
import s from "./Posts.module.css";

const PostsForm = () => {
	const dispatch = useAppDispatch();

	return (
		<Formik
			initialValues={{ post: "" }}
			validationSchema={Yup.object({
				post: Yup.string().required(""),
			})}
			onSubmit={(values, { setSubmitting }) => {
				dispatch(actions.addPost(values.post));
				values.post = "";
				setSubmitting(false);
			}}>
			{({ isSubmitting }) => (
				<Form>
					<div className={s.profile_new_post}>
						<Field
							as="textarea"
							cols="50"
							rows="3"
							name="post"
							placeholder="What's new?"
						/>
						<ErrorMessage className={s.errorMes} name="post" component="div" />
						<button className={s.bPublish} type="submit" disabled={isSubmitting}>
							Publish
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

const Posts = React.memo(() => {
	const {postData} = useAppSelector((state) => state.profilePage)

	const postItem = postData
		.map((el) => (
			<Post
				id={el.id}
				key={el.id}
				text={el.text}
				numOfLike={el.likesCount}
			/>
		))
		.reverse();

	return (
		<div className={s.profile_posts}>
			<div className={s.posts_wrapper}>
				<PostsForm  />
				{postItem.length > 0 ? <div className={s.profile_title}>Publications</div> : null}
				{postItem}
			</div>
		</div>
	);
});

export default Posts;
