import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getAuthUserData, logout } from "../../redux/reducers/auth-reducer";
import logo from "./../../images/pngwing.png";
import s from "./Header.module.css";

const Header = () => {
	const { isAuth, login } = useAppSelector((state) => state.auth);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAuthUserData);
	}, []);

	return (
		<header className={s.header}>
			<NavLink to={"/profile"}>
				<img className={s.header_logo} src={logo} alt="logo" />
			</NavLink>

			<div className={s.loginBlock}>
				{isAuth ? (
					<NavLink to={"/login"} onClick={() => dispatch(logout())}>
						{login + " (logout)"}
					</NavLink>
				) : (
					<NavLink to={"/login"}>Login</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
