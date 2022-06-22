import { NavLink } from 'react-router-dom';
import logo from './../../images/pngwing.png';
import s from "./Header.module.css"

const Header = (props) => {

	return (
		<header className={s.header}> 
			<img className={s.header_logo} src={logo} alt="logo" />

			<div className={s.loginBlock}>
				{/* {props.isAuth ? <a href="/login" onClick={props.logout}>{props.login + " (logout)"}</a> : <NavLink to={'/login'}>Login</NavLink>} */}
				{props.isAuth ? <NavLink to={'/login'} onClick={props.logout}>{props.login + " (logout)"}</NavLink> : <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header;