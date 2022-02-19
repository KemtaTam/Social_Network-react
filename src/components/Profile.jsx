import "./../App.css";

const Profile = () => {
	return (
		<section className="content">
			<img className="content__back-img" 
				src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt="back-img">
			</img>
			<div className="content__profile">
				<div className="content__profile-info-wrapper">
					<img className="content__profile-img" 
					src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg" alt="ava">
					</img>
					<div className="content__profile-info">
						<div className="content__profile-name">Ignat M.</div> <hr></hr>
						<div className="content__profile-additional">
							<div className="content__profile-additional-kind">
								Date of Birth: <br/>
								City:<br/>
								Education:<br/>
								Web-Site:<br/>
							</div>
							<div className="content__profile-additional-value">
								01.01.2000<br/>
								Tomsk<br/>
								TSU<br/>
								https://lala.com<br/>
							</div>
						</div>
					</div>
				</div>
				<div className="content__profile-posts">
					<div className="content__profile-title">My posts</div>
					<div className="content__profile-new-post">
						New post
					</div>
					<div className="content__profile-post">
						Post
					</div>
				</div>
			</div>
		</section>
	)
}

export default Profile;