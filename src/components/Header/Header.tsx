import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../images/pngwing.png";
import s from "./Header.module.css";

type PropsType = {
	isAuth: boolean;
	login: string | null;
	logout: () => void;
};
const Header: React.FC<PropsType> = ({ isAuth, logout, login }) => {
	return (
		<header className={s.header}>
			<NavLink to={"/profile"}>
				<img className={s.header_logo} src={logo} alt="logo" />
			</NavLink>

			<div className={s.loginBlock}>
				{isAuth ? (
					<NavLink to={"/login"} onClick={logout}>
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
