import p from "./Posts.module.css"

const Post = (props) => {
	let addLike = () => {
		props.addLike(props.id)
	}
	let delPost = () => {
		props.delPost(props.id)
	}

	return (
		<div className={p.profile_post}>
			<div className={p.post_wrapper}>
				<div className={p.top_post_wrapper}>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQblpU20ze2Vsusvi7MmRwzZYanB0cVwNJHg&usqp=CAU" alt="ava" />
					<button className={p.bDel} onClick={delPost}>X</button>
				</div>
				<div className={p.post_text}>{props.text}</div>
			</div>
			<button className={p.bLike} onClick={addLike}>like</button> <span className={p.likesCount}>{props.numOfLike}</span>
		</div>
	)
}

export default Post;