import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import Preloader from "../../Components/common/Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getStatus, getUserProfile } from "../../redux/reducers/profile-reducer";
import s from "./Profile.module.css";

const Profile = () => {
	const { isFetching } = useAppSelector((state) => state.profilePage);
	const { isAuth, userId } = useAppSelector((state) => state.auth);

	const dispatch = useAppDispatch();
	const params = useParams();

	const isOwner = !params.userId;

	useEffect(() => {
		const currentProfileID = params.userId || userId;
		console.log('profile test')

		if (!currentProfileID) {
			console.warn("ID should exists in URI params or in state ('userIdURL')");
		} else {
			dispatch(getUserProfile(+currentProfileID)); 
			dispatch(getStatus(+currentProfileID)); 
		}
	}, [params, userId])

	return (
		<section className={s.content}>
			{isFetching ? (
				<Preloader />
			) : isAuth ? (
				<div className={s.profile}>
					<ProfileInfo isOwner={isOwner} />
					<Posts />
				</div>
			) : (
				<Navigate to={"/login"} />
			)}
		</section>
	);
};

export default Profile;
