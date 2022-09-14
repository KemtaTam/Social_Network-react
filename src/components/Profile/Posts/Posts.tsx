import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import Post from "./Post";
import { PostType } from "../../../types/types";

import s from "./Posts.module.css";

type ProsTypeForm = {
	addPost: (newPost: string) => void;
};
const PostsForm: React.FC<ProsTypeForm> = ({ addPost }) => {
	return (
		<Formik
			initialValues={{ post: "" }}
			validationSchema={Yup.object({
				post: Yup.string().required(""),
			})}
			onSubmit={(values, { setSubmitting }) => {
				addPost(values.post);
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

type PropsType = {
	postData: Array<PostType>;
	addPost: (newPost: string) => void;
	delPost: (id: number) => void;
	addLike: (id: number) => void;
};
const Posts: React.FC<PropsType> = React.memo(({ postData, addPost, delPost, addLike }) => {
	let postItem = postData
		.map((el) => (
			<Post
				id={el.id}
				key={el.id}
				text={el.text}
				numOfLike={el.likesCount}
				delPost={delPost}
				addLike={addLike}
			/>
		))
		.reverse();

	return (
		<div className={s.profile_posts}>
			<div className={s.posts_wrapper}>
				<PostsForm addPost={addPost} />
				{postItem.length > 0 ? <div className={s.profile_title}>Publications</div> : null}
				{postItem}
			</div>
		</div>
	);
});

export default Posts;
