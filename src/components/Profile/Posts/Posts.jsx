import s from "./Posts.module.css"
import Post from "./Post";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const PostsForm = (props) => {
	return (
		<Formik
			initialValues={{ post: '' }}
			validationSchema={Yup.object({
				post: Yup.string().required(''),
			  })}
			onSubmit={(values, { setSubmitting }) => {
				props.addPost(values.post);
				values.post = '';
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<div className={s.profile_new_post}>
						<Field as="textarea" cols="50" rows="3" name="post" placeholder="What's new?"/>
						<ErrorMessage className={s.errorMes} name="post" component="div" />
						<button className={s.bPublish} type="submit" disabled={isSubmitting}>
							Publish
						</button>
					</div>
				</Form>
			)}
		</Formik>
  );
}

const Posts = (props) => {
	let postItem = props.postData
		.map(el => <Post id={el.id} 
						text={el.text} numOfLike={el.likesCount} 
						addLike={props.addLike} key={el.id} 
					/>)
		.reverse();	

	return (
		<div className={s.profile_posts}>
			<div className={s.posts_wrapper}>
				<PostsForm {...props}/>
				<div className={s.profile_title}>Publications</div>
				{postItem}
			</div>
		</div>
	)
}

export default Posts;