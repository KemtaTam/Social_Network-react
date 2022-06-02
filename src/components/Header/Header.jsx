import { NavLink } from 'react-router-dom';
import logo from './../../images/pngwing.png';
import s from "./Header.module.css"

const Header = (props) => {
	return (
		<header className={s.header}> 
			<img className={s.header_logo} src={logo} alt="logo" />

			<div className={s.loginBlock}>
				{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header;