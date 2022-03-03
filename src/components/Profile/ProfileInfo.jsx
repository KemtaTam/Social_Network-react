import p from "./Profile.module.css"

const ProfileInfo = () => {
	return (
		<div className={p.profile_info_wrapper}>
			<img className={p.profile_img} 
				src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg" alt="ava">
			</img>
			<div className={p.profile_info}>
				<div className={p.profile_name}>Ignat M.</div> <hr/>
				<div className={p.profile_additional}>
					<div className={p.profile_additional_kind}>
						Date of Birth: <br/>
						City:<br/>
						Education:<br/>
						Web-Site:<br/>
					</div>
					<div className={p.profile_additional_value}>
						01.01.2000<br/>
						Tomsk<br/>
						TSU<br/>
						https://lala.com<br/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;