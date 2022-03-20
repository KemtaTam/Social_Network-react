import p from "./Posts.module.css"
import Post from "./Post";

const Posts = (props) => {
	let postItem = props.postData.map(el => <Post text={el.text} numOfLike={el.likesCount} />)

	return (
		<div className={p.profile_posts}>
			<div className={p.posts_wrapper}>
				<div className={p.profile_new_post}>
					<textarea name="new_post" id="" cols="50" rows="3" placeholder="What's new?"/>
					<button className={p.bPublish}>Publish</button>
				</div>
				<div className={p.profile_title}>Publications</div>
				{postItem}
			</div>
		</div>
	)
}

export default Posts;