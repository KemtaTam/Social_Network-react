import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const activeLink = ({isActive}) => isActive ? s.active : s.item; 

const Sidebar = (props) => {
	return (
		<nav className={s.nav}>
			<ul className={s.ul}>
				<li className={s.li}>
					<NavLink to = "/profile" className ={activeLink}>Profile</NavLink>
				</li>
				<li className={s.li}>
					<NavLink to = "/dialogs" className ={ activeLink}>Message</NavLink>
				</li>
				<li className={s.li}>
					<NavLink to = "/friends" className ={ activeLink}>Friends</NavLink>
				</li>
				<li className={s.li}>
					<NavLink to = "/users" className ={ activeLink}>Users</NavLink>
				</li>
			</ul>
			<div className={s.hr}></div>
		</nav>
		
	)
}

export default Sidebar;